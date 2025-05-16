//to run file tsc typescript.js then node javascript.js


let firstname:string='abc'
console.log(firstname);

///asynchronus and classes interfaces 
//data sharing 
//project structur and folder structure
                                                                                                    
type callback=(message:string)=>void;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
     
                                                                                                          

function greet(name:string,callback:callback ):void{
    const message=`hello,${name}`;
    callback(message);
}
function logMessagee(msg:string){
    console.log("callback executed "+msg);

}
greet('alice',logMessagee);

//2 nd ex
interface User{
    id:number;
    name:string;

}

type usercallback=(user:User)=>void;

//type is used for custome ttype 

function fetchuser(id:number,callback:usercallback):void{
    setTimeout((  )=>{
        const user:User={
            id:id,
            name:"john doe"

        };
        callback(user);
    },1000);
}
fetchuser(1,(user)=>{
    console.log(`fetched user:${user.name} (ID:${user.id})`);

});


//promise
function waitandresolve():Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("promise resolved after 2 seconds")
        }, 1000);
    });
}

waitandresolve()
.then((message)=>{
    console.log(message);
})
.catch((err)=>console.log(err));


//async
function fetchUserdata(userid:number):Promise<string>{
    return new Promise((resolve,reject)=>{
        if(userid===0){
            reject("invalid")
        }
        else{
           setTimeout(()=>{
            resolve(`userdata,${userid}`);
           },1000)
        }
        
    });
}
fetchUserdata(1).then(result=>console.log(result))
.catch((err)=>console.log(err));




function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); 
  });
}


async function getData() {
  console.log("Fetching data...");
  try {
    const result = await fetchData();
    console.log("Result:", result);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

getData();
