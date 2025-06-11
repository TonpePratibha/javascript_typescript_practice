let Name:string="pratibha"
console.log(Name);


let id:number=98;
let isActive:boolean=true;
let tags:string[]=["typescript","anguglar"];
let anything:any="bhdb jhefhd";
console.log(id+" "+isActive+" "+tags+" "+anything);

//tuple
let employees:[number,string]=[1,"abc"]
console.log(employees);

enum Status{
    pending,
    inprogress,
    done
}
let taskstatus:Status=Status.inprogress;
console.log(Status);
console.log(taskstatus);


//custom types 
type users={
    id:number;
naame:string;
email?:string;  //optional
}

let user1:users={
id:1,
naame:"hfdjuhc"

}
console.log(user1);


function add(a:number,b:number):number{
    return a+b;
}

add(3,6);
const greetd=(name:string):void=>{
    console.log("hello",name);
}
greetd("fvvfvfvf");

//union and intersection
let idd:number|string; //union 
idd=90;
console.log(idd);

type user11={
    name:string
};
type Admin={role:string};
type Adminuser=user11 & Admin;

const admin:Adminuser={name:'Alex',role:"Manager"};

console.log(admin);

//
interface vehicle{
    brand:string;
    speed:number;
    drive():void;
}
class Car implements vehicle{
    brand='porsche';
    speed=100;
    drive(){
        console.log("driving at",this.speed);
    }

}
