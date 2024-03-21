// let person = {
//     // property
//     naam : "vinay nath",
//     city : 'korba',

//     //methods -> functions
//     describe : function describe(){
//         console.log("hi i am vinay");
//     }
// }

// console.log(person);
// console.log(person.naam);
// console.log(person.city);
// console.log(person.describe); // wrong

// console.log(person.describe()); // right

// --------------------------------------------

// let person = {
//     // property
//     naam : "vinay nath",
//     city : 'korba',

//     //methods -> functions
//     describe : function vinay(){
//         console.log("hi i am vinay");
//     }
// }
// console.log(person);
// console.log(person.describe());

// -----------------------------------------
 
// let person = {
//     // property
//     naam : "vinay nath",
//     city : 'korba',

//     //methods -> functions
//     describe : function vinay(){
//         console.log("hi i am vinay");
//     }
// }
// person.describe();  // always acess key


// let person = {
//     // property
//     naam : "vinay nath",
//     city : 'korba',

//     //methods -> functions which are described / wrtitten inside the object
//     describe : function (){
//         console.log("hi i am vinay");
//         console.log(`hi i am  ${person.naam}`);
//         console.log(`hi i am ${this.naam}`);
//         // this object ko point kr rha hai
//         // return 10   
// // when nothing is return to the function then by default undefind is return
//         return 10;
        
//     }
// }
// // console.log(person.describe());
// person.describe()

// let ans = person.describe(); 
// console.log(ans);

// type - 1 (this)
// this keyboard points to the object when reffered in the method.

// -----------------------------

// let marks = {
//     dsa : 55,
//     wed : 85,
//     ml : 57,
//     totalmarks : function(){
//         return 55 + 85 + 57
//     }
// }
// // function();
// console.log(marks);
// console.log(marks.totalmarks());   // 207

// ----------------------------------

let marks = {
    dsa : 55,
    wed : 85,
    ml : 57,
    totalmarks : function(find){
        // return 55 + 85 + 57 + find
        return this.dsa + this.wed + this.ml +find
    }
}
// function();
console.log(marks);
console.log(marks.totalmarks(50));   // 207