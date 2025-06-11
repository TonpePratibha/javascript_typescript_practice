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
        console.log(this.brand+" driving at"+ this.speed);
    }

}
const c12=new Car;
c12.drive();


///inheritance
class Animal{
    constructor(public name:string){}

    makesound():void{
        console.log("some generic sound");

    }

}
class Dog extends Animal{

    makesound():void{ 
        console.log(this.name+ " Bark");
    }
}

const d=new Dog("Tommy");
d.makesound();

//generics

function identity<T>(arg:T):T{
    return arg;
}
let output=identity<string>("hello");
console.log(output);


function wrapArray<T>(value:T):T[]{
    return [value];
}

let numarray=wrapArray<number>(56);
 numarray=wrapArray<number>(50);
 numarray.push(78);

let strArray=wrapArray<string>("iuiu");
console.log(numarray);
console.log(strArray);


interface Box<T>{
    content:T;
}
const stringbox:Box<string>={content:"Books"};
const numberBox:Box<number>={content:123};

console.log(stringbox);
console.log(numberBox);



class Datastore<T>{
    private data:T[]=[];
    add(item:T){
        this.data.push(item);

    }
    getAll():T[]{
        return this.data;
    }

}

const numberstore=new Datastore<number>();
numberstore.add(90);
numberstore.add(94);
console.log(numberstore.getAll())


const stringstore=new Datastore<string>();
stringstore.add("opop");
console.log(stringstore.getAll());

function merge<T,U>(obj1:T,obj2:U):T & U{
return{...obj1,...obj2};
}

const merged=merge({name:"Alice"},{age:20});
console.log(merged);


///arraystringmethods
//typesoffunctions
//asynchronius 
//arrow functions


