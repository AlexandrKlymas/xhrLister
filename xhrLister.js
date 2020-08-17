document.addEventListener('DOMContentLoaded', xhrInit);
function xhrInit(){
    xhrConfig.forEach(function (config) {
        if(config.debug===1){console.log('inited config:');console.log(config);}
       var el = document.getElementById(config.id);
        if(config.debug===1){console.log('inited element:');console.log(el);}
        var events = config.events.split(',');
        if(config.debug===1){console.log('inited events:');}
        events.forEach(function (event) {
            if(config.debug===1){console.log(event);}
            el.addEventListener(event, function (e) {
                e.preventDefault();
                sendXhr(el,config);
            });
        });
    });
}
function sendXhr(el,config) {
    if(config.debug===1)console.log('sendXhr');
    if(config.debug===1)console.log(el.nodeName);
    var xhr = new XMLHttpRequest(),
    formData = el.nodeName==='FORM'?new FormData(el):new FormData(),
        method = config.method?config.method:el.method,
        action = config.action?config.action:el.action;
    // var formDataObj = {};

    if(Object.keys(config.addData).length>0){
        if(config.debug===1)console.log('addData:');
        for (var field in config.addData){
            formData.append(field, config.addData[field](el));
            if(config.debug===1)console.log(field+': '+config.addData[field](el));
        }
    }
    // formData.forEach(function(value, key){
    //     formDataObj[key] = value;
    // });
    if(Object.keys(config.callbacks.before).length>0)config.callbacks.before(el);
    xhr.open(method,action, true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if(Object.keys(config.callbacks.success).length>0)config.callbacks.success(xhr.responseText);
            if(config.debug===1)console.log('success');
        }
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
            if(Object.keys(config.callbacks.error).length>0)config.callbacks.error(xhr.responseText);
            if(config.debug===1)console.log('error');
        }
    };
    xhr.send( formData );
    if(Object.keys(config.callbacks.after).length>0)config.callbacks.after(el);
}