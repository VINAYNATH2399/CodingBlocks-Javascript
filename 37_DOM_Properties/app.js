
// -------- Properties of DOM -------------
// querySelector

let p = document.querySelector('p');

//innerText -> getter + setter
// console.log(p.innerText);
// brainful -> this can read css(aware of the styling)

//textContent -> getter + setter
// console.log(p.textContent);
// brainless -> cannot read css(umaware of the styling)

// innerHTML -> getter + setter
// console.log(p.innerHTML);
//brainful -> read css + shows the tags too

//-------------------------------------

//setter
// p.innerText = "hello i am bengali baba"

// p.textContent = "hello i<h1>am vinay</h1> baba"

// p.innerHTML = "hello i <h1>am vinay</h1> baba"