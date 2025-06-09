     
console.log(i);  //var variable is hoiisted at top it will not give error
var i=20;    
// i=20; 

var i;
i=10;
console.log(i);

function testvar(){
var i=5;
console.log(i);

}
testvar();

function testlet(){

   
    // console.log(i);   //this will give error becaue its used before declaration
    //  let i=0;   
    let i=0;
    console.log(i); 

}
testlet();

if(true){
    let i=6;
    console.log(i);
}



const b=90;
// b=20; //error
console.log(b);



class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }}
  const mycar=new Car("porsche",2025);
  console.log(mycar);


  const obj={
    name:"abc",
    age:67
    
  }
  console.log(obj);
  obj.name="pratibha",
  obj.age=25;
  console.log(obj);

  //array strings
  let text = "ABCDEFGHIJKL";
let length = text.length;
console.log(length);
console.log(text.charAt(7));
let letter=text[7];
console.log(letter);

let fruit = "Apple, Banana, Kiwi";
let part = text.slice(7);  
let part1=text.substring(7,13)
let str=text.split('');

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);


const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);


const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 

const fruits = ["apple", "banana"];
console.log(fruits.includes("banana")); 

//spread
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];  //spread operator
console.log(newNums);

const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26, city: "Delhi" };
console.log(updatedUser); 


//rest operator
function sum1(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum1(1, 2, 3, 4)); 


const [first, ...others] = [10, 20, 30, 40];
console.log(first); 
console.log(others); 


const person = { name: "Bob", age: 30, city: "Mumbai" };
const { name, ...rest } = person;

console.log(name); 
console.log(rest); 


// const doSomething=(function (result1) {
//   doSomethingElse(result1, function (result2) {
//     doAnotherThing(result2, function (result3) {
//       doFinalThing(result3, function (finalResult) {
//         console.log(finalResult);
//       });
//     });
//   });
// });



