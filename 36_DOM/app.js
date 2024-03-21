// DOM-> document object model/modelling
//        html       js   change/manipulate
// html change with the help of js
// aap html ke andar jakar just with the help of js usse
// change karpao

// selection of your element:- 
// 1. getElementById    -> return single element
// 2. getElementByTagName -> array return
// 3. getElementByClassName
// 4. query selector
// 5. query SelectorAll

// using js ill manipulate html
// selectord
// document -> html mei select kro is-is way se

// way-1 -> getElementById

//let ele = document.getElementById(vinay);  ->No
// let ele = document.getElementById("vinay");  //->yes
// only returns 1 single entity -> 1st occurance

//-------------------------------------------
// styling....

// alag alag same element par properties provide karna
// ele.style.color = "red";
// ele.style.backgroundColor = "yellow";
// ele.style.border ="10px solid black";

// ek saath element par properties apply karna
// ele.style.cssText = `
//     color : purple;
//     font-size : 50px;
//     background-color : gold;
// `

//----------------------------------

// way-2 -> getElementsByTagName -> return an array(html collection )

//document.getElementsByTagName(p)  //NO
// let allparagraph = document.getElementsByTagName('p')

// heding.style.color = "red"; //directly nhi use hoga-> use looping

// for(let paragraph of allparagraph){
//     paragraph.style.color = "red"
//     paragraph.style.backgroundColor = "orange"
// }

// for(let paragraph of allparagraph){
//     paragraph.style.cssText = `
//          color : red;
//          background-color : green;
//          font-size : 20px
//     `;
// }

//----------------------------------

// way-3 -> getElementsByClassName -> return an array(html collection)

// let classEle = document.getElementsByClassName('vin'); //array -> looping

// for(let v of classEle){
//     v.style.textDecoration = "line-through"
//     v.style.color = "red"
// }

//---------------------------------------

// way-4 -> querySelector -> 3 in 1 kaam krta hai -> only 1 element ko select karta hai

// Id ->
//let q1s = document.querySelector('#vinay'); //single select

// className ->
//let q2s = document.querySelector('.vin'); //single posible

// tagname ->
//let q3s = document.querySelector('p');// single possible

//------------------------------------------

// way-5 -> querySelectorAll -> all the elements ko select krta hai

//Id ->
let q1s = document.querySelectorAll('#vinay');// select All

// className ->
let q2s = document.querySelectorAll('.vin');

// tagname ->
let q3s = document.querySelectorAll('p');

