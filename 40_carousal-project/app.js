

const imgEl = document.querySelector('img')

let arr = [
    'https://images.unsplash.com/photo-1590005194861-af70fa800956?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVzdCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVzdCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVzdCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVzdCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1675964349731-e7710eaebf8f?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVzdCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D'
]


// change the attribute src
let num = 0;
let stopId = setInterval(function(){
   imgEl.setAttribute('src',arr[num]);
   num = (num + 1)% arr.length;   //modulus -> reminder
},3000)

setTimeout(function(){
    clearInterval(stopId);
},30000)

// % -> reminder
// 1%5 = 1
// 2%5 = 2
// 3%5 = 3
// 4%5 = 4
// 5%5 = 0
// 6%5 = 1
// 7%5 = 2
