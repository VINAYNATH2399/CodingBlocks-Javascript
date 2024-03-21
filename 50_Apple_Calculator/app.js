
let inputEl = document.querySelector('input')
let btns = document.querySelectorAll('button')


for (let button of btns){
    button.addEventListener('click', function(e){
           let btnText = e.target.innerText;
        //    console.log(btntxt);
         if(btnText === 'C'){
            inputEl.value = "";
         }
         else if(btnText === '=' ){
            try{ // sahi kaam
                inputEl.value = eval(inputEl.value);
            }
            catch(err){
                inputEl.value = "invalid"; // error handling
            }
         }
         else{
            inputEl.value = inputEl.value + btnText;
         }
    })
}





















