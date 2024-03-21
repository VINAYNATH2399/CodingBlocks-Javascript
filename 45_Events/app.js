// function something(){
//     console.log('mai toh ji dab gya');
// }

//-------------------------------

// 2nd way
// let btn = document.querySelector('button');
// btn.onclick = function(){
//     console.log("jai hanuman");
// }

// or

// let btn = document.querySelector('button');
// let vinay = function(){
//              console.log("mai hoon na");
// }
// btn.onclick = vinay

// -----------------------------------

// interview ka sawal

// let btn = document.querySelector('button');

// function naacho(){
//     console.log('naacho');
// }

// function gaayo(){
//     console.log('gaayo');
// }

// ek event par ek kaam

// btn.onclick = naacho;
// btn.onclick = gaayo

// over riding ki wajah se "gaayo" aayega

//-------------------------------------
// multiple kaams/functions

// 3rd method -> 3 way -> addEventlistner()

// btn.addEventListener('click', function(){  // event , function cal
    //     console.log("event chl gya");
    // })
    
//-----------------------------------
// multiple functions   
// btn.addEventListener('click', naacho);
// btn.addEventListener('click', gaayo); 

//---------------------
// task
let btn = document.querySelector('button');
let body = document.querySelector('button');

btn.addEventListener('click',function(){
    body.style.backgroundColor = "red"
})