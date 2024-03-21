
// manipualting attributes

// getAttributes -> getter

let anchor =  document.querySelector('a')

console.log(anchor.getAttribute('href')); // specify the attribute

let inp = document.querySelector('input')

console.log(inp.getAttribute('type'));

//-------------------------------------
// setAttribute -> setter

anchor.setAttribute('href', 'https://facebook.com')
// 1st -> jisko,  2nd -> jiss value ko

inp.setAttribute('type','color')
inp.setAttribute('type','date')
 