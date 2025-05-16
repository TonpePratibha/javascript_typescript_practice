console.log("typescript");
var json = JSON.parse("874");
console.log(typeof json);
var s = "string";
console.log(s);
//arr
var names = [];
names.push("abc");
console.log(names);
function print() {
    console.log(" inside function");
}
print();
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    return person;
}());
var p = new person("pratibha");
console.log(p);
