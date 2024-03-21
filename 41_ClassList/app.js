let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')

// 1. add

// h1.classList.add('class1')
// h1.classList.add('class2')
// h1.classList.add('class3')

//-------------------------------
h1.classList.add('class1', 'class2', 'class3');

//----------------------------

// 2.remove

// h1.classList.remove('class1')
// h1.classList.remove('class1', 'class2');

//-------------------------
// 3. toggle

// it is used as a On & Off button 
// h1.classList.toggle('class1')

//------------------------------
// 4.contains

console.log(h1.classList.contains('class2'));

