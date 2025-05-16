

// converting function into small groups of functions 

// function(a+b){
//     return a+b;
// }  
// this function is converted below
function add(a){    
    return function(b){
        return a+b;
    }

}

const addtwo=add(9);
console.log(addtwo(8));


//2 nd exapmle
function subtract(x){
    return function(y){
        return function(z){
            return x-y-z;
        }
    }
}

const sub=subtract(10);
const subsub=sub(5);
const subsubsub=subsub(3);
console.log(subsubsub);


///function chaining

//calling a method n another method of obj

class person
{
    constructor(name){
        this.name=name;
        this.age=0;

    }
    setage(age){
        this.age=age;
        return this; //to apply functionchaining
    }

greet(){
    console.log(`hi i am ${this.name}  and my age is ${this.age}` )

}
celebratebirthday(){
    console.log(`hi  ${this.name}  and happy birthday`);
    return this;
}



}

const p=new person('alice');
p.setage(25).celebratebirthday().greet();


//
let firstname='pratibha';
const modifiedname=firstname.toUpperCase().trim();
console.log(modifiedname);


//higher order fu6nctions

function demo(){
    console.log("function one")
}
function demo2(action){     
  action();
  action();

}
demo2(demo);

//2nd function
const arr=[1,2,3,4];
const arr2=arr.map((n)=>n*n);
console.log(arr2);

const n=[1,2,3,4,5,6];

const n2=n.filter(n=>(n%2)); //skip even numbers
console.log(n2);

// call method used ofr js obj context |
 
function greeting(greeting){
    console.log(greeting+ this.name)
}

const people =
{
   name:'pratibha',
    // lastname:'tonpe'
}

greeting.call(people,"hello ");
//when we define obj and want to call tis obj properties inside function we can use it in 
//by taking this obje as an argument and 
//call method used to call current methos with arguments
//with call one obj can call methoid belonngs to another obj
//immediate invoke
//this method takes one this.obj argument and other arguments 
const emplooyee={
    fullname:function(){ 
        console.log(this.firstname +' '+this.lastname);
    }
};
const employee1={
    firstname:'pratibha',
    lastname:'tonpe'
}
const employee2={
    firstname:'tejas',
    lastname:'tonpe'
}

emplooyee.fullname.call(employee1,'bgh','huh');  

emplooyee.fullname.call(employee2,'hello'); 

//ex2
const Employee={
    fullname:function(city,age){ 
        console.log(this.firstname +' '+this.lastname+' '+city+' '+age);
    }
};
const Employee1={
    firstname:'pratibhaaa',
    lastname:'tonpeeee'
}
const Employee2={
    firstname:'tejasss',
    lastname:'tonpeee'
}

Employee.fullname.call(Employee1,'pune','23');  //call
Employee.fullname.apply(Employee1,['mumbai','25']);//apply

const bindfun=Employee.fullname.bind(Employee2,'hydrabad','25');//bind ex
bindfun();
//apply()

//apply method iis similer to call method but it takes this.obj arguument and other arguments as array 
//if you want ot pass array then use aply method


//bind functrion is used to same as call and apply but it returns anew function and need to inlvoke this new
//function it takes arguments indivually
//call, bind ,aply are same usded for obj

///closerus
function outerfunction(){
    let outervariable="abc"

    function innerfunction(){
       console.log(outervariable) ;  //inner fun using var of outerfun even though outer function is finiched
    }return innerfunction()
}

outerfunction();
//ex2
console.log("closure example2")
function counterr(){
     let count=0;
     return function(){
        count++; //1
        return count;
     }

}
const counter=counterr(); //here closure stores th count value
console.log(counter());

console.log(counter());
console.log(counter());

console.log("closure example2")

function closerexample(){

    for(let i=0;i<3;i++){
        setTimeout(()=>{                                                                  
            console.log(i);
        },1000)
    }
}
closerexample();

//class 
class abc{
    constructor(name){
        this.name=name;
    }
    static hello(){
      console.log('hello');
    }
}
const a=new abc("ford")
abc.hello();
