

// const person = {
//      first : "vinay",
//      last : "nath",
//      favcolor :"blue"
// }

// console.log(person);

// can i add a property? -> yes

// person.age = 39;
// console.log(person);

// can i change the existing value? -> yes

// person.first = "chintu"
// console.log(person);

// can i delete a property

// delete person.last;
// console.log(person);

//------------------------------

// SPREAD OPERATOR (failaana)

// spread operator works on both array and object

// let arr = [10,20,30,40,50,60];
// let arr2 = [88,90,100];

// // concatination
// let ans = arr.concat(arr2)
// console.log(ans);

// modern -> most widely used

// arr2 = [...arr, 88,90,100]
// console.log(arr2);

// let anss = [...arr, ...arr2];
// console.log(anss);

//-----------------------------------

// object par spread

// let obj = {
//      l:'bengali',
//      m: 'mintu',
//      n: 25,
// }

// let obj1 = {
//      ...obj,
//      age :45,
// }

// console.log(obj);
// console.log(obj1);

// obj1.l = 200;
// console.log(obj);
// console.log(obj1);

//------------------------

//DESTRUCTURING

// destructuring in array

// let fruits = ['apple', 'mango', 'pineapple', 'strawberry'];
// let fruits = ['apple', 'mango', 'pineapple', 'strawberry','lichi'];
// //  console.log(fruits);

// // console.log(fruits[2]);
// // console.log(fruits[0]);

// // modern way

// // let [a,b,c,d] = fruits;
// //  let [a,b,,d] = fruits;
// //  let [a,b,c,d,e] = fruits;
//  let [a,b,c,d,e='banana'] = fruits;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// destructuring in objects

const car = {
     name: 'bm w',
     price: 150
}

console.log(car.name);
console.log(car.price);

// modern

// let {} = car;
// let {n,p} = car;   // wrong
// console.log(n);   // undefined
// console.log(p);    // undefined

// let {name, price} = car;  // wrong
// console.log(name);
// console.log(price);

let {name:badlahuanaam, price} = car; // right
console.log(name); //no
console.log(badlahuanaam); //yes
console.log(price);