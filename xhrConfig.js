var xhrConfig = [
    {
        id:'forma',
        events:'submit',
        debug:1,
        addData:{
            elID: function (el) { return el.id; },
        },
        callbacks:{
            before: {},
            success: function (el) { return '55'; },
            error: function (el) { return '11'; },
            validation: {},
            after:{},
        },
    }
];
//
// function getAjaxListerConfig(id) {
//     switch (id) {
//         case 'more_blocks':
//             return {
//                 url : '/controller.php',
//                 addData : {
//                     elID : id,
//                     elText : $('*[data-ajaxid="'+id+'"]').text(),
//                     capcha_id : getCaptcha(id),
//                     email : 'capcha@complaints.digital',
//                 },
//                 callbacks : {
//                     parsers:{
//                         someKey1: function (el) {return parseSomeData(el)},
//                         someKey2: function (el) {return parseSomeData(el,'someData')},
//                     },
//                     success: {anyObjKey1 : function(response){toConsole(response)},},
//                     error: {anyObjKey2 : function(response){toConsole(response)},},
//                     validation: {
//                         capcha_id: {
//                             rule: 'required',
//                             callBackOk: function (field) {setBorderGreen(field)},
//                             callBackError: function (field) {setBorderRed(field)},
//                         },
//                         email: {
//                             rule: 'email',
//                             callBackOk: function (field) {setBorderGreen(field)},
//                             callBackError: function (field) {setBorderRed(field)},
//                         },
//                     },
//                 },
//             };
//         case 'simpleTestConfig': //minimal config
//             return {
//                 url : '/controller.php',
//                 callbacks : {
//                     success: {grecaptcha : function(response){toConsole(response)}},
//                     error: {logerror : function(response){toConsole(response)}},
//                     validation: {
//                         email: {
//                             rule: 'email',
//                             callBackOk: function (field) {setBorderGreen(field)},
//                             callBackError: function (field) {setBorderRed(field)},
//                         },
//                     },
//                 },
//             };
//         case 'forma': // form id
//             return {
//                 url : '/controller.php', //ajax url
//                 addData : { // additional data (object) for FormData. Your additional fields
//                     formID : id,
//                     capcha_id : 'capchacomplaints',
//                 },
//                 callbacks : { // callBacks. What we do before, after, validation settings, success, errors events
//                     before: { // Do something before, send ajax. Independent with validation callBacks
//                         logbefore: function(data){
//                             toConsole(data)
//                         },
//                     },
//                     after: { // Do something after, sending ajax.
//                         // Independent with validation, success, errors callBacks
//                         logbefore: function(data){
//                             toConsole(data)
//                         },
//                     },
//                     validation:  { // validation callBacks. Like Evo FormLister validation
//                         // object (field:{rule,callBack if error, callBack if success})
//                         phone:{
//                             rule: 'customValidator',
//                             validator: function(field) { // custom validator must return false/true
//                                 return customValidatorTest(field)
//                             },
//                             callBackError: function(){ // error CallBack
//                                 toConsole('no valid phone')
//                             },
//                             callBackOk: function(){ // success CallBack
//                                 toConsole('Ok Phone')
//                             },
//                         },
//                         email: { // field name
//                             rule:'email', //validation rule, like Evo FormLister
//                             callBackError: function(){ // error CallBack
//                                 toConsole('no valid email')
//                             },
//                             callBackOk: function(){ // success CallBack
//                                 toConsole('Ok Email')
//                             },
//                         },
//                         file: {
//                             rule:'requiredFile',
//                             callBackError : function(){
//                                 toConsole('File required')
//                             },
//                             callBackOk : function(){
//                                 toConsole('Ok File')
//                             },
//                         },
//                         formID: {
//                             rule: 'required',
//                             callBackError: function(){
//                                 toConsole('FormID required')
//                             },
//                             callBackOk:function(){
//                                 toConsole('Ok FormID')
//                             },
//                         },
//                     },
//                     success: { // if ajax success. Server return 200
//                         anyObjKey1 : function(response){
//                             toConsole(response)
//                         },
//                     },
//                     error: {// if ajax return error. Server not 200
//                         anyObjKey2 : function(response){
//                             toConsole(response)
//                         },
//                     },
//                 },
//             };
//         default:return false;
//     }
// }