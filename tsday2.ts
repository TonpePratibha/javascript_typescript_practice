//encpsulation
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

const acc = new BankAccount(1000);
acc.deposit(600);
console.log(acc.getBalance());



//inheritance
class Animals {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log("Some sound");
  }
}

class Dogs extends Animals {
  constructor(name: string) {
    super(name);
  }

  makeSounds(): void {
    console.log("Woof");
  }
}

const dog = new Dogs("Bruno");
dog.makeSounds(); 

//polymorphism
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  side: number;
  constructor(side: number) {
    super();
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

const shapes: Shape[] = [new Circle(5), new Square(4)];

shapes.forEach(shape => {
  console.log(shape.area());
});

//abstration

abstract class Vehicle {
  abstract startEngine(): void;

  move(): void {
    console.log("Vehicle is moving");
  }
}

class car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started");
  }
}

const myCar = new car();
myCar.startEngine(); 
myCar.move();        



//generics

function identity<T>(value: T): T {
  return value;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(100);

console.log(output1); // Hello
console.log(output2); // 100


function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let num11 = getFirstElement<number>([10, 20, 30]);  // 10
let str1 = getFirstElement<string>(["a", "b", "c"]); // "a"


interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Books" };
const numberBoxx: Box<number> = { content: 123 };

console.log(stringBox);
console.log(numberBoxx);

//generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // 20

const stringStack = new Stack<string>();
stringStack.push("A");
stringStack.push("B");
console.log(stringStack.pop()); // "B"
