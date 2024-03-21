


// function user(){

// }
// let user1 = user();
// console.log(user1);

//--------------------

// constructor function --> returns an object
// jiski pehchan hai --> new
// function user(){
   
// }
// let user2 = new user();
// console.log(user2);

// ---------------------------------
// constructor function
// convention --> 1st letter capital

// function User(){
//    this.username = "Vinay";
//    this.age = 24;
//    this.color = 'green';
// }
// let user3 = new User();
// console.log(user3);

// --------------------------
// constructor -> blueprint -> objects
// function User(naam, umar, rang){
//    this.username =naam;
//    this.age = umar;
//    this.color = rang;
// }
// let user3 = new User(`vinay`, 24, `black`);
// let user4 = new User(`nath`, 25, `green`);
// console.log(user3);
// // console.log(user3.age);
// console.log(user4);

// ----------------------------------
// constructor function
function User(naam, umar, rang){
    this.username =naam;
    this.age = umar;
    this.color = rang;

    // this.desc = function(){
    //     return `my name is ${this.username}`
    // }

 }
 User.prototype.description = function(){
    return `my name is ${this.username}`
 }
 let user3 = new User(`vinay`, 24, `black`);
 console.log(user3);
 console.log(user3.description());


//  let user4 = new User(`nath`, 25, `green`);
//  console.log(user4);
//  console.log(user4.desc());












