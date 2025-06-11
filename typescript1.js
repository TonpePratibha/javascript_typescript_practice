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
