
const hlp = require('../helper/helper').helper;

hlp.log("-------------------");
hlp.log("Regular expressions");
hlp.log("-------------------\n");

var str = "EduCBA";
var regEx = /^[A-Za-z]/;
var res = "false";

if(str.match(regEx)){
res= "true";
}

hlp.logBlue(res);