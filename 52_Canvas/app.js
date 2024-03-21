

let canvas = document.querySelector('canvas');

// brush

let ctx = canvas.getContext('2d');

// // draw rectangle

// ctx.fillRect(100,100,100,60);  // -> x, y, w, h

//-------------------------------------

// paint mei dip karo brush ko
ctx.fillStyle = 'green'

// draw rectangle

// ctx.fillRect(100,100,100,60);  // -> x, y, w, h

//----------------------------------

// stroke  ( outline dena)
// ctx.strokeRect(100,100,100,60);  // -> x, y, w, h

// --------------------
// brush ko dubao aur color do

// ctx.strokeStyle = "purple";
// //outline dena
// ctx.strokeRect(100,100,100,60);  

//--------------------------------------------

// draw paths

// ctx.beginPath();
// ctx.moveTo(20,30);
// ctx.lineTo(120,130);
// ctx.lineTo(20,130);
// ctx.lineTo(20,30);
// ctx.lineTo(120,30);
// ctx.lineTo(120,130);
// // ctx.strokeStyle='red'
// ctx.stroke();
// // ctx.fillStyle = 'yellow';
// // ctx.fill();

//------------------------------------------

ctx.font = '28px arial'
ctx.fillStyle = 'green'
ctx.fillText('vinay', 30, 75)