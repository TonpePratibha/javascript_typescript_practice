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
//encpsulation
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var acc = new BankAccount(1000);
acc.deposit(500);
console.log(acc.getBalance());
//inheritance
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.makeSound = function () {
        console.log("Some generic sound");
    };
    return Animals;
}());
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs(name) {
        return _super.call(this, name) || this;
    }
    Dogs.prototype.makeSounds = function () {
        console.log("Woof! Woof!");
    };
    return Dogs;
}(Animals));
var dog = new Dogs("Bruno");
dog.makeSounds();
//polymorphism
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.area = function () {
        return 0;
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    return Square;
}(Shape));
var shapes = [new Circle(5), new Square(4)];
shapes.forEach(function (shape) {
    console.log("Area:", shape.area());
});
//abstration
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.move = function () {
        console.log("Vehicle is moving");
    };
    return Vehicle;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    car.prototype.startEngine = function () {
        console.log("Car engine started");
    };
    return car;
}(Vehicle));
var myCar = new car();
myCar.startEngine();
myCar.move();
//generics
function identity(value) {
    return value;
}
var output1 = identity("Hello");
var output2 = identity(100);
console.log(output1); // Hello
console.log(output2); // 100
function getFirstElement(arr) {
    return arr[0];
}
var num11 = getFirstElement([10, 20, 30]); // 10
var str1 = getFirstElement(["a", "b", "c"]); // "a"
var stringBox = { content: "Books" };
var numberBoxx = { content: 123 };
console.log(stringBox);
console.log(numberBoxx);
//generic class
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // 20
var stringStack = new Stack();
stringStack.push("A");
stringStack.push("B");
console.log(stringStack.pop()); // "B"
