//string
var name1 = "abc";
console.log(name1);
//number
var age = 10;
var salary = 90000.00;
console.log(age);
console.log(salary);
//boolean
var isbolean = true;
console.log(isbolean);
//null
var user = null;
console.log(user);
//undefined
var temp = undefined;
console.log(undefined);
//array
var num1 = [12, 2, 3];
var str = ["hsxh", "jiuhs"];
console.log(num1);
console.log(str);
//tuple
var personn = ["Alice", 30];
console.log(personn);
//any
var data = 10;
data = "Hello";
data = true;
//unknown
var value = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
//union
var id1;
id1 = 101;
id1 = "ABC123";
console.log(id1);
//literal==exact same value
var statuss = "success";
console.log(statuss);
//enum type
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log(move);
//obj
var users = {
    name: "John",
    age: 25
};
console.log(users);
var emp = { id: 1, name: "Sam" };
console.log(emp);
var p1 = {
    id: 101,
    title: "Book",
    price: 199
};
console.log(p1);
//never ==never returns
function throwError(message) {
    throw new Error(message);
}
// throwError("error");
///return void
function logWarning() {
    console.warn("Warning!");
}
logWarning();
