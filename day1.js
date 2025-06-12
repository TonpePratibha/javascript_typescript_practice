//variables
//event loop

function variables(){
if(true){
    var a=10;  //function scoped

    let b=20;   //block scoped
    const c=30;
  a=90;         //reassign
   b=77;
   // c=0;        cant reassign

   var a=45;   //can redclare
  // let b=9;      cant redclare
   //const c=55;
    console.log(b);
    console.log(c);

}
console.log(a);
//console.log(b);
//console.log(c);
}

//console.log(a);
variables();



//hoisting
console.log(v);     //  hoisted //undefined
var v=90;    

// console.log(l);       //not hoisted error
// let l=78;

// console.log(j);
// const j=50;



//functions  in js


function username(name){         //named function
    return  `hello,${name}`;       //hoisted
}

console.log(username("abc"));

//function expression  not hoisted
//anonymus function
const add=function(x,y){          
    return x+y;
}
console.log(add(5,3));

//arrow function   //not hoisted


const addd=(k,l)=>k+l;
console.log(addd(3,4));


const multiply=(k,l)=>k*l;
console.log(multiply(3,4));


//synchronus
function printjs(){
    console.log("javascript")
}

function printts(){
    console.log("typescript")
}
printjs();     // executed one by one
printts();


//callback

function calculate(a,b,callback){
    return callback(a,b);
}


function addition(x,y){
return x+y;
}

function sub(p,q){
    return p-q;
}

console.log("callback ex.");
console.log(calculate(3,4,addition));
console.log(calculate(6,4,sub));


//callback hell
console.log("callbackhell ex");
console.log("Startcallback");

setTimeout(() => {
  console.log("Step 1");


setTimeout(() => {
    console.log("Step 2");

setTimeout(() => {
      console.log("Step 3");

      setTimeout(() => {
        console.log("Step 4");
    }, 1000);

}, 1000);

  }, 1000);

}, 1000);

console.log("Endcallback");


//asynchronus


function asyncExample(){
console.log("start");

setTimeout(()=>{
    console.log("asynchronus function")
},2000);

console.log("end");

}
asyncExample();   


//using promise



function promiseExample(shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(" Promise resolved");
      } else {
        reject("Promise rejected");
      }
    }, 2000);
  });
}

console.log("before promise");

promiseExample(true)     
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("error:", error);
  });

console.log("after promise");


//asyncawait
function asyncawaitExample(shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(" Promise resolved ");
      } else {
        reject(" Promise rejected ");
      }
    }, 1500);
  });
}

async function execute(shouldResolve) {
  console.log("startasync");

  try {
    const result = await asyncawaitExample(shouldResolve);
    console.log(result);
  } catch (error) {
    console.error(" error:", error); 
  }

  console.log("endasync");
}


execute(false);





//promise  types

const checkeven=new Promise((resolve,reject)=>{
    let num=4;
    if(num%2===0)
        resolve("num is even")                          
        else
    reject("err num is not even")
})
checkeven.then((result)=>{console.log(result)});
checkeven.catch((error)=>console.log(error))

Promise.all([
    Promise.resolve("success1"),
  Promise.resolve("success2"),
    Promise.reject("failed")
]
).then(result=>console.log(result))
.catch(error=>console.log(error))  //it takes multiple promises and can resolve 
//but gives error result if one of them fails =output if only all rsolved  //givews rejected output

Promise.allSettled([
    Promise.resolve("success1"),
  Promise.resolve("success2"),
    Promise.reject("failed")
]
).then(result=>console.log(result))
  //gives status of all promises in array if failed or reesolved

  
  //promise.race resolves or rejects as soon as first promise settled
  //promise.any rejects as soon as first promise fullfuilled

