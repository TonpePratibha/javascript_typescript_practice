//array 
const cars=["porsche","BMW","mercedes"]
console.log(cars);
let c1=cars[0];
cars[3]="thar";
console.log(cars);
cars.push("nexon");
console.log(cars);
let pop=cars.pop()

console.log("poped eleement "+pop);
let shiftele=cars.shift();
let unshiftele=cars.unshift();
console.log(shiftele);
console.log(unshiftele);  //

console.log(cars);

let type=typeof(cars);
console.log(type);

let length=cars.length;
let carslist=cars.toString();
console.log(carslist);
let car=cars.at(2);
let joinedarr=cars.join();
console.log("joined arry :"+joinedarr)

const bikes=["duke","hunter","java","apache"];
const vehicles=cars.concat(bikes);
console.log(vehicles);

bikes.copyWithin(0,2);

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

const Arr = [1, 2, 3, 4, 5, 6];

const nArr = Arr.map(x => [x, x * 10]);
console.log(nArr);
const neArr = Arr.flatMap(x => [x, x * 10]);
console.log(neArr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 0, "Lemon", "Kiwi");


console.log(fruits);


let removed=fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(removed);
console.log(fruits);

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(months);
console.log(spliced);

const f1=fruits.slice(3);
console.log(fruits);
console.log(f1);
let position1 = fruits.indexOf("Apple") + 1;
let position2 = fruits.lastIndexOf("Apple") + 1;
fruits.includes("Mango");


fruits.sort();
fruits.reverse();
const sorted = fruits.toSorted(); //without chnging original arr
const reversed = fruits.toReversed();

const nums = [1, 2, 3];
const copy = [...nums]; 

function sum(...args) {
  return args.reduce((a, b) => a + b);
}

[1, 2, 3].map(x => x * 2); 
[1, 2, 3].reduce((a, b) => a + b, 0); 



const numbers = [4, 9, 16, 25, 29,89,76,45,3];
let first = numbers.find(myFunction);
numbers.sort(function(a, b){return a - b});    //sort i asec
numbers.sort(function(a, b){return b - a});

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);

let pos = numbers.findLastIndex(x => x > 40);
console.log(pos);

const num=new Array(3,3,3,3,386,6);

let carss=[
  ["Fiesta", "Focus", "Mustang"],
    ["320", "X3", "X5"],
   ["500", "Panda"]
  ]

  console.log(carss);
  console.log(carss[0][0]);

//strings

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length1 = text.length;

let text1 = "  hello world  ";
let char = text1.charAt(0);
let char1 = text1.charCodeAt(0);
let char2 = text1.at(2);
console.log(text1.toLowerCase());
console.log(text1.toUpperCase());
console.log(text1.trim());
console.log(text1.trimStart());
console.log(text1.trimEnd());
console.log(text1.startsWith("Hello"))
console.log(text1.endsWith("world"))
console.log(text1.includes("rld"))
let result = text1.repeat(4);  //4 copies of text created
console.log(result);

console.log(text.concat(" ",text1));

console.log(char);
console.log(char1);
console.log(char2);

let fruit = "Apple, Banana, Kiwi";
fruit.replace("kiwi", "orange");
let part = fruit.slice(8, 13);
console.log(fruit);
console.log(part);
let str1=fruit.slice(9);
console.log(str1);
let str2 = fruit.slice(-12);
console.log(str2);
let str3= fruit.substring(8, 13);
console.log(str3);
 console.log(fruit.split(",") );

console.log(fruit.indexOf("Apple"));
console.log(fruit.lastIndexOf("Apple"));
console.log(fruit.search("Banana"));
console.log(fruit.match("wi"));

