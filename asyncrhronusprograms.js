//callback function
function calculate(a,b,operation){
    return operation(a,b);
}
function add(x,y){
return x+y;
}

function sub(p,q){
    return p-q;
}

console.log(calculate(3,4,add));
console.log(calculate(6,4,sub

));

setTimeout(()=>{
    console.log("timer")
},1000)

//promises
const promise=new Promise((resolve,reject)=>{
   resolve();
   reject();
    
})

promise.then((result)=>{console.log(result)})
promise.catch((error)=>console.log(error))


const checheven=new Promise((resolve,reject)=>{
    let num=4;
    if(num%2===0)
        resolve("num is even")
        else
    reject("err num is not even")
})
checheven.then((result)=>{console.log(result)});
checheven.catch((error)=>console.log(error))

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

  
  //promise.race resolves or rejects as soon as firt promise settled
  //.any rejects as soon as first promise fullfuilled



function waitOnesecond(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(" async finished")
        },1000);
    });
}
async function run(){
    console.log("waiting");
    const result=await waitOnesecond();
    console.log(result);
}
run();
