// ------------------ 1 ----------------
// var b = 20;
// function sam(){
//     console.log(b);
// }
// sam();        // 20

// ---------------2-------------

// function bahar(){
//     var v =10;

//     andar();
//     function andar(){
//         console.log(v);
//     }
// }
// bahar()        // 10   hosting ho rhi hai

// -------------3----------------

// function outer(){
//     inner();
//         function inner(){
//             console.log(b);
//         }
//         var b = 20;
//     }
// outer();    // undefined

// ---------------4-------------------
// function outer(){
//     var a = 10;
//     inner();
//         function inner(){
//             console.log(a)
//             var a = 30;
//             console.log(a);
//         }
//         var a = 1000;
//     }
// outer();           // undefined 30

// ------------------5------------------------
// function outer(){
//     var a = 10;
//     inner();
//         function inner(){
//             console.log(a)
//             var a = 30;
//             console.log(a);
//         }
//         var a = 1000;
//     }
//     console.log(a);
// outer();           // error a is not defined

// -------------------6--------------------
// function outer(){
//     var a = 10;
//     inner();
//         function inner(){
//             console.log(a)
//             var a = 30;
//             console.log(a);
//         }
//         var a = 1000;
//     }
// outer();           //  undefined 30

// --------------------7-----------------------

// function outer(){
//     var a = 10;
//     console.log(a);
    
//     function inner(){
//         console.log(a);
//         var a = 200;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);
// outer();              // error a is not defined

// -------------------8---------------------
// function outer(){
//     var a = 10;
//     console.log(a);
    
//     function inner(){
//         console.log(a);
//         var a = 200;
//         console.log(a);
//     }
//     console.log(a);
// }
// outer();              // 10 10 
// inner function kaam nhi krega kyuki inner function call nhi hua hai

// ------------------ 9 --------------------

//  function outer(){
       
//         inner();   // situation 2
//         var a = 10;
//         console.log(a);
        
//         // inner();    // situation 1
//         function inner(){
//             console.log(a);
//             var a = 200;
//             console.log(a);
//         }
//         console.log(a);
//     }
//     outer();   
    
// ------------------------- 10 ---------------
//  function outer(){
//         var a = 10;
//         console.log(a);

//         if(true){
//             console.log(a);
//             var a = 200;
//             console.log(a);
//         }
//         console.log(a);
//     }
//     outer();      // 10 10 200 200

 // --------------------- 11 ----------
//  function outer(){
//         let a = 10;
//         console.log(a);

//         if(true){
//             console.log(a);
//              a = 200;
//             console.log(a);
//         }
//         console.log(a);
//     }
//     outer();      // 10 10 200 200

// ------------------ 12 -------------
//  function outer(){

//         let a = 10;
//         console.log(a);
//         { 
//             let a = 200;
//             console.log(a);
//         }
//         // { 
//         //     var a = 200;
//         //     console.log(a);  // a has already declared
//         // }
//         console.log(a);
//     }
//     outer();      // 10  200 200

