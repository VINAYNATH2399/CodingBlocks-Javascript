// functions are the heart of js

// function sum(num1 , num2){
//     console.log(num1 + num2)
// }
// sum(20 , 10);
// sum("vinay", " nath")
// sum(true, false)

// ----------------------

// function a(fn){   // fn is a parameter
//    console.log("mai hu a");
//    fn();   // caling is important for call back function
// }

// function b(){
//     console.log("mai hu b");
// }

// a();
// b();  // kya mai is pure argument ko as a function bhej sakta hu
// a(b);

// function a(fn){   // fn is a parameter
//    console.log("mai hu a");
//    fn();
// }

// a(function b(){
    //     console.log("mai hu b");
    // });
    
    // ---------------------------------
    
    // function a(){  // hof
    //     console.log("inside a");
    
    //     function b(){
        //         console.log("inside b");
        //     }
        //     return b;
        // }
        // let temp = a();
        // temp()

// -----------------------------
// higher order function  -> 'a
// 1. When you pass the entire function as an argument in
// some other function then it is called HOF 
        
// 2. When you return an entire function from some other
// function then the other function is your HOF

// callback function -> 'b'
// The function which is being sent as an argument
// to some other function and there in called as well
// then it is a callback function


// --- USE CASE ---

// let arr = ['sam', 100, 'bhaukal', true, 400, false]

// function getString(arr){
//     let res = [];
//     for (let item of arr){
//         if(typeof(item)=='string'){
//             res.push(item)
//         }
//     }
//     return res;
// }
// function getNumber(arr){
//     let res = [];
//     for (let item of arr){
//         if(typeof(item)=='number'){
//             res.push(item)
//         }
//     }
//     return res;
// }
// function getBool(arr){
//     let res = [];
//     for (let item of arr){
//         if(typeof(item)=='boolean'){
//             res.push(item)
//         }
//     }
//     return res;
// }
// getString(arr)
// console.log(getString(arr));
// getNumber(arr)
// console.log(getNumber(arr));
// getBool(arr)
// console.log(getBool(arr));

// ----- output --------
// ['sam', 'bhaukal']
// [100, 400]
// [true, false]

// -------------- use HOF ------------
let arr = ['sam', 100, 'bhaukal', true, 400, false]

function getString(item){
   return typeof(item) == 'string'
}

function getNumber(item){
   return typeof(item) == 'number'
}

function getBool(item){
   return typeof(item) == 'boolean'
}

function get(arr, fn){
  let res = []
  for (let item of arr){
    if(fn(item)){
        res.push(item);
    }
  }
  return res;
}

// get(arr, getString)
console.log(get(arr, getString));

// get(arr, getNumber)
console.log(get(arr, getNumber));

// get(arr, getBool)
console.log(get(arr, getBool));