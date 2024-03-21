




let inpEl = document.querySelector('input');
let btnEL = document.querySelector('button');
let list = document.querySelector('#list')

btnEL.addEventListener('click', function(e){
     let note_Text = inpEl.value;

     let li = document.createElement('li')
     li.innerText = note_Text;
     list.appendChild(li);
     inpEl.value = ""; // setter


     li.addEventListener('click', ()=>{
         li.remove();
         // e.target.remove();
     })
})



  