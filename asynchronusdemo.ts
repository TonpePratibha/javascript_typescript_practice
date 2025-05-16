

//callbak function demo
function display():void{
    console.log("disply1");
}

function display2():void{
console.log("disply2 ")
display();
}

// display();
display2();

//ex2
// function demo( callback:()=>void):void{  //callback ex
// console.log("using callbck");

//     callback();
// }

function demo( callback:()=>void):void{  //asynchronus ex
    console.log("using callbck");
    setTimeout(()=>{
        callback();
    },2000);
}

function mycallback():void{
    console.log("in mycallback");
}

demo(mycallback);


//promises ex


function asynfun(callback:()=>void):void{
    console.log("i async fun");
  setInterval(()=>{
    console.log("i setinterval");
    callback();
  },1000)
}

function printfun():void{
    console.log("in printfun");
}

//asynfun(printfun);
