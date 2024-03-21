

// constructor function
// function Person(naam, umar){
//     this.username = naam;
//     this.age = umar;
// }

// Person.prototype.getFullName = function(){
//     return (`mor naam hai ${this.username}`)
// }

// Person.prototype.printName = function(){
//     console.log(`mor naam hai ${this.username}`)
// }

// let person1 = new Person("vinay", 24)
// console.log(person1);

// --------------------------
// Class syntax
// class Person{
//     constructor(naam, umar){
//         this.username = naam;
//         this.age = umar;
//     }
//     printName(){
//         console.log(`mor naam hai ${this.username}`)
//     }
//     getFullName(){
//         return (`mor naam hai ${this.username}`)
//     }
// }
// class student extends Person{

// }

// let person2 = new student("bemgali", 124)
// console.log(person2);

// // person2.getFullName()


class Person{
    constructor(naam, umar){
        this.username = naam;
        this.age = umar;
    }
    printName(){
        console.log(`mor naam hai ${this.username}`)
    }
    getFullName(){
        return (`mor naam hai ${this.username}`)
    }
}
class student extends Person{
    constructor(naam, umar,rolnum){
        super(naam,umar); // parent
        this.roll = rolnum; 
    }  
    printName(){
        console.log(`kya hua hai ${this.username}`)
    }
    alag(){
        console.log(`mai hu vinay`);
    }
}

let person3 = new student("bemgali", 124, 25)
// console.log(person2);
console.log(person3.printName());
console.log(person3.alag());
