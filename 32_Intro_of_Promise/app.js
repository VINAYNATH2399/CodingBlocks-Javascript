

// function getdata(cb){
//     setTimeout(function(){
//         let data = 'hello my family'; // assumed ki sever de rha hai
//         cb(data);
//     },4000)
// }
// getdata(function(data){
//     console.log(data);
// })

//----------------------------------------

// function getdata(cb){
//     setTimeout(function(){
//         // let data = 'hello my family'; // assumed ki sever de rha hai
//         // cb(data, null); // server decide krega
//         cb(null); // server decide krega
//     },4000)
// }
// getdata(function(data, error){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
   
// })

// Because cb ke case mein error ko handle karna thoda muskil hota hai
// Isliye hmm "Promise" ka use krenge

//--------------------------------------
// callback hell -> Promise
// 1. Promise is a Constructor Function
// 2. Promise Constructor:- It always accepts a cb function as
// argument.
// 3. callback function:- always accepts 2 argument
// a. resolve    b. reject
// agar hm chahe toh iska naam change bhi kr sakte hai
// lekin hm standard tarika hi upnayenge

//--------------------------------
// step-1
// let promise1 = new Promise()  // object
//------------------------------------
// step-2
// let promise1 = new Promise(function(){

// })
//------------------------------------
// step-3
// let mypromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let data = 'hello my promise family';  // server dega
//         resolve(data); // waada poora
//     },4000)  
// })  
// // mypromise.then() // accepts a cb function
// // jab promise resolve hota hai vo data hme "then" me milta hai

// mypromise.then(function(data){
//     console.log(data);
// })

//------------------------------

let mypromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = 'mai server hu nhi de rha deta';  
        reject(err); // wada todd dena
    },4000)  
})  
// mypromise.then().catch()

// mypromise.then(function(data){
//     console.log(data);
// })
.catch(function(err){
    console.log(err);
})
// jab bhi hm reject krenge toh sara data hme catch m milega
