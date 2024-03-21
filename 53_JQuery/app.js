

// console.log($) // -> $ == jQuery

// Selection

let h1 = $('h1') // document.querySelectorAll('h1')

// ID
let idd = $('#vin')

//class
let classes = $('.sam')

// paragraph
// let para = $('p') // select paragraph

//-------------------------------
// manupulation -------------

// para.css('color','red')
// para.css('border','2px solid black')
// para.css('background-color','yellow')

// better approach
// para.css({
//     color:'red',
//     border:'2px solid black',
//     backgroundcolor:'yellow',
//     fontsize: '20px',
// })
//----------------------------------
// accessing text
// GETTER

// para.text();
// console.log(para.text()); // brainless -> TEXT CONTENT

// // SETTER
// para.text('Mein tera hero')

// getter + setter
// para.html();
// console.log(para.html());  //-> INNERHTML

// ---------------------------

// attributes -> attr()
// let inp = $('input')
// // getAtribute
// inp.attr('type')
// console.log(inp.attr('type'));
// console.log(inp.attr('id'));

// setAtribute // setter -> 2 ( jis , jisse)
// inp.attr('type', 'date')
// inp.attr('type', 'color')
// inp.attr('type', 'checkbox')


//----------------------------------

// let lis = $('ul li');
// let lis = $('ul li').first();
// lis.css('color','green')

// let liss = $('ul li').last();
// liss.css('color','red')

//----------------------------------
// let inp = $('input')

// console.log(inp.val());// getter
// inp.val('mai nhi bataunga');// setter


// class attributes

let para = $('p')

// add

// para.addClass('a')
para.addClass('a b c') // yes
//para.addClass('a', 'b', 'c')  //no

// remove

// para.removeClass('a')
// para.removeClass('a b c')

// // toggle
// para.toggleClass('b')
// para.toggleClass('a b c')


// hasClass

console.log(para.hasClass('a')); // true

