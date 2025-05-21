"use strict";
//callbak function demo
function display() {
    console.log("disply1");
}
function display2() {
    console.log("disply2 ");
    display();
}
// display();
display2();
//ex2
// function demo( callback:()=>void):void{  //callback ex
// console.log("using callbck");
//     callback();
// }
function demo(callback) {
    console.log("using callbck");
    setTimeout(() => {
        callback();
    }, 2000);
}
function mycallback() {
    console.log("in mycallback");
}
demo(mycallback);
//promises ex
function asynfun(callback) {
    console.log("i async fun");
    setInterval(() => {
        console.log("i setinterval");
        callback();
    }, 1000);
}
function printfun() {
    console.log("in printfun");
}
//asynfun(printfun);
