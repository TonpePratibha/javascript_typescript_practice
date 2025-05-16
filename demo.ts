
console.log("typescript");
const json = JSON.parse("874");

console.log(typeof json);

var s :string="string";

console.log(s);
//arr
const names: string[] = [];
names.push("abc");
console.log(names);

function print():void{
    console.log(" inside function");
}
print();


//class ex
 class person{
    private name :string;
    public constructor(name:string){
this.name=name
    }
}
const p=new person("pratibha");
console.log(p);


