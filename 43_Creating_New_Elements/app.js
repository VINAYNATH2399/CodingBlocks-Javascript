


let section = document.querySelector('section')

let h2 = document.createElement('h2');
let p = document.createElement('p')

h2.innerText = 'vinay'
p.innerText = 'i am strong'


// append()
// section.appendChild(h2)
// section.appendChild(p)
// section.appendChild(h2, p) // wrong -> multiple

// section.appendChild("hi i am strong")  //wrong -> string

// section.append(h2)
// section.append(h2, p) // right
// section.append("hello World")// right

// section.append(`<h1>hello from korba</h1>`)  //right

//---------------------------------

// starting mei add

//prepend() -> start -> multiple -> string

//section.prepend(`<h1>hello from korba</h1>`)

// PTR-> 1 element ye to append hoga ya fir prepend dono ek saath nhi ho sakta

//---------------------------------------
//before()
// section.before(h2)
// section.after(h2)

//-------------------------

