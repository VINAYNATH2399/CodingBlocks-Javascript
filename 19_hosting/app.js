// Hosting
// Whenever we access the variable or the function 
// before its declaration then it is called hosting.

//    Examples:-   1

// console.log(a);   // use
// merafunction();  // use

// var a = 20;  // define
// function merafunction(){    // define
//     console.log("I love function");
// }

// Output:-  undefined   I love function

//    Examples:-   2

// console.log(a);   // use
// merafunction();  // use

// var a = 20;  // define
// function merafunction(){    // define
//     console.log("I love function");
// }
// console.log(a);
// Output:- undefined   I love function  20

//    Examples:-   3

// function a(){     // define
//     console.log(b); // use
//     var b = 100;   // define
// }
// a();    // access

//    Examples:-   4

// function a(){     // define
//     console.log(b); // use
//     var b = 100;   // define
// }
// a();    // access
// console.log(b);
// Output:-   Undefined     error




