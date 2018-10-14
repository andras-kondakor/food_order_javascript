var requireOption = require('../common').requireOption;
/**
 *Using the template engine render the values into the template
 */

 module.exports=function(objectrepository,viewName){
     return function(req,res,next){
        console.log('render loaded');
         res.end('Template: '+viewName)
     };
 };