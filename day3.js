
//closers

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("Count:", count);
  }

  return inner;
}

const counter = outer();  
counter(); 
counter(); 
counter(); 

//   used for encpsulaton
function createfun(msg) {
  return function revealfun() {
    console.log("The msg is:", msg);
  };
}

const mySecret = createfun("we are using closers");
mySecret();   ///op is we are using coseurs




//
for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log("Value:", j);
    }, j * 1000);
  })
  (i);   //function call
}
//
function outerFunction(x) {
  let outerVar = x;

  function innerFunction(y) {
    return outerVar + y;
  }

  return innerFunction;
}

let closureFunc = outerFunction(5);
console.log(closureFunc(3));
console.log(closureFunc(9));

//iife
(function () {
  console.log("IIFE runs immediately!");
})();

(function (name) {
  console.log("Hello", name);
})("Pratibha");

(() => {
  console.log("Arrow function IIFE");
})();

(()=>{console.log("iife")})();


for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log("j =", j);
    }, j * 1000);
  })(i);                   
}

//generators

function* greet() {
  yield "Hello";
  yield "Hi";
  yield "Hey";
}

const greeter = greet();

console.log(greeter.next()); 
console.log(greeter.next()); 
console.log(greeter.next()); 
console.log(greeter.next()); 



function* numbers(){
    yield 2;
     yield 9;
      yield 6;
}
const n1=numbers();
console.log(n1.next());
console.log(n1.next());
console.log(n1.next());
console.log(n1.next());


function* counterGen() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

const counterr = counterGen();

console.log(counterr.next().value); 
console.log(counterr.next().value); 
console.log(counterr.next().value); 


function* colors() {
  yield "Red";
  yield "Green";
  yield "Blue";
}

for (let color of colors()) {
  console.log(color);
}


function* fibonacciGen() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
const fib = fibonacciGen();

console.log(fib.next().value); 
console.log(fib.next().value); 
console.log(fib.next().value); 
console.log(fib.next().value); 
console.log(fib.next().value); 
console.log(fib.next().value); 


//promise methods

function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched!");
      } else {
        reject("Fetch failed!");
      }
    }, 1000);
  });
}

fetchData(true)
  .then(result => console.log( result))
  .catch(error => console.log( error))
  .finally(() => console.log(" Operation finished"));

//
  const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");

Promise.all([p1, p2])
.then(values => {      //Waits for all promises to resolve If any fails, it rejects immediately
  console.log(values);    
});


const p11 = Promise.resolve("OK");
const p22 = Promise.reject("Fail");

Promise.allSettled([p11, p22])
.then(results => {      //Waits for all to complete, returns their status.
  console.log(results);
 
});



const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));   //Returns the result of the first resolved or rejected promise.
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));

Promise.race([fast, slow])
.then(result => console.log(result));


const p112 = Promise.reject("Err1");
const p212 = Promise.resolve("Success");
const p312 = Promise.resolve("Another");  

Promise.any([p112, p212, p312])
.then(result => console.log(result))    //Returns the first fulfilled promise. Ignores rejections.