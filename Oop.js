// let user1 = {name: "Bishnu", age: 56, email: "abc@xyz.com"};
// let user2 = {name: "Bikram", age: 56, email: "abc@xyz.com"};
// let user3 = {name: "pawan", age: 56, email: "abc@xyz.com"};
// let user4 = {name: "Sristi", age: 56, email: "abc@xyz.com"};

// ES5
function User(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
}
let user1 = new User("Bishnu", 45, "abc@CSSStyleDeclaration.com");
let user2 = new User("Bikram", 45, "abc@CSSStyleDeclaration.com");
let user3 = new User("Pawan", 45, "abc@CSSStyleDeclaration.com");
let user4 = new User("Sristi", 45, "abc@CSSStyleDeclaration.com");

console.log(user1);

// ES6+
class User1{
    constructor(name, age, email){
        this._name = name;
        this.age = age;
        this.email = email;
    }
    increaseAge(){
        this.age++;
    }
    static walk(){
        console.log("This is the static method");
    }
    get name(){
        return this._name;
    }
    set name(newVal){
        this._name = newVal;
    }
}

let user5 = new User1("ram", 34, "cde@def.com");
user5.increaseAge()
console.log(user5);
User1.walk();
console.log(user5.name, user5._name);
user5.name= "Shyam";
console.log(user5);

// inheritance

class Employee extends User1{
    constructor(name,age,email,position)
    {
        super(name,age,email)
        this._position = position;
    }
}


let employee1 = new Employee("Hari", 34, "dkfkdfk","Software Engineer");

console.log(employee1);
employee1.increaseAge();
console.log(employee1);
