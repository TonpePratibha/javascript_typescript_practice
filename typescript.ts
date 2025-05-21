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

type usercallback=(user:User)=>void;  //type alises

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


interface user{   // to get the structure for user
    username:string;
    age:number;
}

const userdata:user={
username:'abc',
age:12

}

console.log(`user detils are : ---${userdata.username}+${userdata.age}`)


const arr:any[]=[];
arr.push(3),
arr.push("abchfcb")
console.log(arr)

//type assertionss and aliases
type dog={
    name:string,
    walk:()=>void
}
type fish={
    name:string,
    swim:()=>void
}

let pet:dog | fish= {name:"goldie", swim:()=>console.log("i acn swim")};
(pet as fish).swim();

function sum(...arr:number[]):number{  //...rest operato for collectiong array elements
   return arr.reduce((acc,value)=>acc+value,0)  //adds vvalues of array and retun sum and default value is 0
}
console.log(sum(1,2,3,4));
console.log(sum(23,12));
console.log(sum())

//arroe functions
let stringvlaues=(str:string):string=>str;
let numbvalues=(num:number):number=>num;

console.log(stringvlaues("arrowfunction"));
console.log(numbvalues(789));

let num=234.566767;
console.log(num.toPrecision(5));



class persoon{
    name:string=''

    constructor(name:string){
        this.name=name;
    }

    getname():string{
        return this.name;
    }

    setname(namee:string){
        this.name=namee;

    }


}
const obj=new persoon('alice');
obj.setname('pratibha')
console.log(obj.getname());



class peopple{


 constructor(private firstname:string,private lastname:string){
    this.firstname=firstname;
    this.lastname=lastname;
 }

  getname():string{
    return `person name ${this.firstname} ${this.lastname}`
 }



}

class employee extends peopple{

    constructor( firstname:string,lastname:string,private jobtitle:string){
        super(firstname,lastname);
    }

display():void {
   console.log(  super.getname());
  console.log(this.jobtitle);
}


}

const e1=new employee('pratibha','tonpe','developer')
console.log(e1.display());


//generics in ts
function getarray<T>(arr:any[]){
    return arr;

}
console.log(getarray<string>(['abc','def','rgfr']));
console.log(getarray<number>([2,3,4,5]));

function getinfo<T,V>(name:T,id:V){
   return `user info is ${name} and id is ${id}`
    
}
console.log(getinfo<number,string>(25,'huyfh'));
console.log(getinfo<string,number>('njvn',5));

//arrays in ts
let arr1=new Array(2,4,5,6,78,)

for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}

let arr2=[2,3,4]
let arr3=[5,6,7]
let newarray=[...arr2,...arr3]; //spread operator
console.log(newarray)
let newarray1=[...arr2,4,9,4]
console.log(newarray1)

console.log(newarray.slice(2,5)); ///gives values of 2 to 4
console.log(newarray.slice(2,6)); //gives vbalue of 32 to 5

newarray.splice(4,4,3,5,6,7,8);
console.log(newarray);

