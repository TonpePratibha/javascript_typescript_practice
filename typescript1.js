var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Name = "pratibha";
console.log(Name);
var id = 98;
var isActive = true;
var tags = ["typescript", "anguglar"];
var anything = "bhdb jhefhd";
console.log(id + " " + isActive + " " + tags + " " + anything);
//tuple
var employees = [1, "abc"];
console.log(employees);
var Status;
(function (Status) {
    Status[Status["pending"] = 0] = "pending";
    Status[Status["inprogress"] = 1] = "inprogress";
    Status[Status["done"] = 2] = "done";
})(Status || (Status = {}));
var taskstatus = Status.inprogress;
console.log(Status);
console.log(taskstatus);
var user1 = {
    id: 1,
    naame: "hfdjuhc"
};
console.log(user1);
function add(a, b) {
    return a + b;
}
add(3, 6);
var greetd = function (name) {
    console.log("hello", name);
};
greetd("fvvfvfvf");
//union and intersection
var idd; //union 
idd = 90;
console.log(idd);
var admin = { name: 'Alex', role: "Manager" };
console.log(admin);
var Car = /** @class */ (function () {
    function Car() {
        this.brand = 'porsche';
        this.speed = 100;
    }
    Car.prototype.drive = function () {
        console.log(this.brand + " driving at" + this.speed);
    };
    return Car;
}());
var c12 = new Car;
c12.drive();
///inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makesound = function () {
        console.log("some generic sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makesound = function () {
        console.log(this.name + " Bark");
    };
    return Dog;
}(Animal));
var d = new Dog("Tommy");
d.makesound();
//generics
function identity(arg) {
    return arg;
}
var output = identity("hello");
console.log(output);
function wrapArray(value) {
    return [value];
}
var numarray = wrapArray(56);
numarray = wrapArray(50);
numarray.push(78);
var strArray = wrapArray("iuiu");
console.log(numarray);
console.log(strArray);
var stringbox = { content: "Books" };
var numberBox = { content: 123 };
console.log(stringbox);
console.log(numberBox);
var Datastore = /** @class */ (function () {
    function Datastore() {
        this.data = [];
    }
    Datastore.prototype.add = function (item) {
        this.data.push(item);
    };
    Datastore.prototype.getAll = function () {
        return this.data;
    };
    return Datastore;
}());
var numberstore = new Datastore();
numberstore.add(90);
numberstore.add(94);
console.log(numberstore.getAll());
var stringstore = new Datastore();
stringstore.add("opop");
console.log(stringstore.getAll());
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var merged = merge({ name: "Alice" }, { age: 20 });
console.log(merged);
