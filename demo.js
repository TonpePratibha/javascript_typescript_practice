"use strict";
console.log("typescript");
const json = JSON.parse("874");
console.log(typeof json);
var s = "string";
console.log(s);
//arr
const names = [];
names.push("abc");
console.log(names);
function print() {
    console.log(" inside function");
}
print();
//class ex
class person {
    constructor(name) {
        this.name = name;
    }
}
const p = new person("pratibha");
console.log(p);
