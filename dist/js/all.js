var bar=function(){console.log("bar")};module.exports=bar;var bar=require("./bar"),foo=function(){console.log("foo"),bar()};module.exports=foo;let answer1="It's alright",answer2="He is called 'Johnny'",answer3='He is called "Johnny"';