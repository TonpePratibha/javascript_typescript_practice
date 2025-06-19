//string
let name1:string="abc";
console.log(name1);

//number
let age:number=10;
let salary:number=90000.00;
console.log(age);
console.log(salary);

//boolean
let isbolean:boolean=true;
console.log(isbolean);

//null
let user:null=null;
console.log(user);

//undefined
let temp: undefined = undefined;

console.log(undefined);

//array
let num1:number[]=[12,2,3]
let str:Array<string>=["hsxh","jiuhs"]
console.log(num1);
console.log(str);
//tuple
let personn: [string, number] = ["Alice", 30];
console.log(personn);


//any
let data: any = 10;
data = "Hello";
data = true;

//unknown
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}


//union
let id1: number | string;
id1 = 101;
id1 = "ABC123";

console.log(id1);
//literal==exact same value
let statuss: "success" | "error" = "success";

console.log(statuss);
//enum type
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;
console.log(move)
//obj
let users: { name: string; age: number } = {
  name: "John",
  age: 25
};

console.log(users);
//custom type
type Employee = {
  id: number;
  name: string;
};

let emp: Employee = { id: 1, name: "Sam" };
console.log(emp);
//interface type
interface Product {
  id: number;
  title: string;
  price: number;
}

let p1: Product = {
  id: 101,
  title: "Book",
  price: 199
};

console.log(p1);

//never ==never returns
function throwError(message: string): never {
  throw new Error(message);
}

// throwError("error");   //give error

///return void
function logWarning(): void {
  console.warn("Warning!");
}

logWarning();
