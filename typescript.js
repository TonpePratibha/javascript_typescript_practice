//to run file tsc typescript.js then node javascript.js
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var firstname = 'abc';
console.log(firstname);
function greet(name, callback) {
    var message = "hello,".concat(name);
    callback(message);
}
function logMessagee(msg) {
    console.log("callback executed " + msg);
}
greet('alice', logMessagee);
//type is used for custome ttype 
function fetchuser(id, callback) {
    setTimeout(function () {
        var user = {
            id: id,
            name: "john doe"
        };
        callback(user);
    }, 1000);
}
fetchuser(1, function (user) {
    console.log("fetched user:".concat(user.name, " (ID:").concat(user.id, ")"));
});
//promise
function waitandresolve() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("promise resolved after 2 seconds");
        }, 1000);
    });
}
waitandresolve()
    .then(function (message) {
    console.log(message);
})
    .catch(function (err) { return console.log(err); });
//async
function fetchUserdata(userid) {
    return new Promise(function (resolve, reject) {
        if (userid === 0) {
            reject("invalid");
        }
        else {
            setTimeout(function () {
                resolve("userdata,".concat(userid));
            }, 1000);
        }
    });
}
fetchUserdata(1).then(function (result) { return console.log(result); })
    .catch(function (err) { return console.log(err); });
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Fetching data...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetchData()];
                case 2:
                    result = _a.sent();
                    console.log("Result:", result);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error occurred:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getData();
var userdata = {
    username: 'abc',
    age: 12
};
console.log("user detils are : ---".concat(userdata.username, "+").concat(userdata.age));
var arr = [];
arr.push(3),
    arr.push("abchfcb");
console.log(arr);
var pet = { name: "goldie", swim: function () { return console.log("i acn swim"); } };
pet.swim();
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (acc, value) { return acc + value; }, 0); //adds vvalues of array and retun sum and default value is 0
}
console.log(sum(1, 2, 3, 4));
console.log(sum(23, 12));
console.log(sum());
//arroe functions
var stringvlaues = function (str) { return str; };
var numbvalues = function (num) { return num; };
console.log(stringvlaues("arrowfunction"));
console.log(numbvalues(789));
var num = 234.566767;
console.log(num.toPrecision(5));
var persoon = /** @class */ (function () {
    function persoon(name) {
        this.name = '';
        this.name = name;
    }
    persoon.prototype.getname = function () {
        return this.name;
    };
    persoon.prototype.setname = function (namee) {
        this.name = namee;
    };
    return persoon;
}());
var obj = new persoon('alice');
obj.setname('pratibha');
console.log(obj.getname());
var peopple = /** @class */ (function () {
    function peopple(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    peopple.prototype.getname = function () {
        return "person name ".concat(this.firstname, " ").concat(this.lastname);
    };
    return peopple;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(firstname, lastname, jobtitle) {
        var _this = _super.call(this, firstname, lastname) || this;
        _this.jobtitle = jobtitle;
        return _this;
    }
    employee.prototype.display = function () {
        console.log(_super.prototype.getname.call(this));
        console.log(this.jobtitle);
    };
    return employee;
}(peopple));
var e1 = new employee('pratibha', 'tonpe', 'developer');
console.log(e1.display());
//generics in ts
function getarray(arr) {
    return arr;
}
console.log(getarray(['abc', 'def', 'rgfr']));
console.log(getarray([2, 3, 4, 5]));
function getinfo(name, id) {
    return "user info is ".concat(name, " and id is ").concat(id);
}
console.log(getinfo(25, 'huyfh'));
console.log(getinfo('njvn', 5));
//arrays in ts
var arr1 = new Array(2, 4, 5, 6, 78);
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
var arr2 = [2, 3, 4];
var arr3 = [5, 6, 7];
var newarray = __spreadArray(__spreadArray([], arr2, true), arr3, true); //spread operator
console.log(newarray);
var newarray1 = __spreadArray(__spreadArray([], arr2, true), [4, 9, 4], false);
console.log(newarray1);
console.log(newarray.slice(2, 5)); ///gives values of 2 to 4
console.log(newarray.slice(2, 6)); //gives vbalue of 32 to 5
newarray.splice(4, 4, 3, 5, 6, 7, 8);
console.log(newarray);
