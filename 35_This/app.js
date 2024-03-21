//...........THIS............
// Five types of "this"-> keyboard
// 1. regular function inovation/calling
// 2. method inovation
// 3. constructor inovation
// 4. indirect calling
// 5. arrow function

// -------- 1. Regular Functional inovation
// let opj = {
//     number: 200,
//     fun:function(){       // method
//          console.log(this);
//     }
// }
//1. bina obj ke bhi this keyword exist krta hai.
// this always depends on how it(this) is being called.

// function fn(){
//       console.log(this);
// }
// fn();    // function call
// In case of regular function calling -> "this" always points to the window object.
// window -> global object 

// function saraswati(){
//     console.log(this);
// }
// saraswati();
//----------------------------------

// -----2. method inovation
// eg 1
// let object = {

//         number: 200,
//         fun:function(){       // method
//              console.log(this); // obj
//         }
//     }
// object.fun(); // method inovation
// method inovation -> this always points to the object it
// is being called upton.

// eg 2
// let obj = {
//     a: 100,
//     vin:function(){
//         console.log(this) //obj2
//         // console.log(this === window);
//     }
// }
// // obj.vin();
// let nath = obj.vin;
// nath(); // direct function -> window

// eg 3
// let obj = {
//     a:10,
//     fn: function(){
//         console.log(this); //1 -> obj
//         function vinay(){
//             console.log(this); //2
//         }
//         vinay();   // direct function -> window
//     }
// }
// obj.fn() // method invocation

//----------------------------
//----- 3. constructor invocation(easiest)
// constructoe invocation -> "This" always points to the 
// newlt created object.

// function Creatobj(){
//        this.x = 200;
// }
// let obj = new Creatobj();  // object create
// console.log(obj.x);

//-----------------------------------

// 4. Indirect invocation
// 3 types of indirect invocation
// a. call()     b. bind()      c. apply()

// call()  and   apply()

// let obj = {
//     a : 20,
//     fn : function(a,b,c){
//         console.log(this,a,b,c)
//     }
// }
// let obj2 = {
//     a : 50
// }

// obj.fn(1,2,3);  // method invocation

// obj.fn.call(obj2) // -> this -> obj2 -> changes the context of this
// obj.fn.call(obj2,1,2,3) // ->this->obj2-> changes the context of this

// // -------------------------
// // call and are same -> changes the context of this
// obj.fn.call(obj2)
// obj.fn.apply(obj2, [1,2,32])

// bind
// let obj3 = {
//     fn : function(){
//         console.log(this);
//     }
// }
// let myfun = obj3.fn.bind(obj3) // cal no , assign yes
// console.log(myfun);
// myfun()

// -----------------
// let obj3 = {
//     fn : function(){
//         console.log(this);
//     }
// }
// function fn3(){
//     console.log(this);
// }
// // fn()
// let fn4 = fn3.bind(100);   //assign
// fn4()

//------------------------------------------

// 5. arrow function
// Ex -1
// let obj5 = {
//     fn : function(){
//         console.log(this);
//     }
// }
// obj5.fn()    // method invocation

// Ex - 2
// let obj5 = {
//     fn : function(){
//         function vin(){
//             console.log(this);
//         }
//         vin()  // direct caling
//     }
// }
// obj5.fn() 

// -> arrow functions -> this refers to the lexical parent
// Ex - 3
// let obj5 = {
//     fn : function(){
//         let vin =()=>{
//             console.log(this);
//         }
//         vin() 
//     }
// }
// obj5.fn() 

// Ex - 4
//window
// let obj5 = {
//     fn : ()=>{
//         let vin =()=>{
//             console.log(this);
//         }
//         vin() 
//     }
// }
// obj5.fn() 