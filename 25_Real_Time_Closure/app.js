
function counter(){
    let count = 10;
    return {
        getCount: function(){
            return count;
        },
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;
        },
        reset: function(){
            count = 10;
        }
    }
}
// counter();
let counter1 = counter()
console.log(counter1); // gets the methods only not the count varuiable 
console.log(counter1.getCount());//10
counter1.increment(); 
console.log(counter1.getCount());//11
counter1.increment();
console.log(counter1.getCount());//12
counter1.decrement();
console.log(counter1.getCount());//11
counter1.reset();
console.log(counter1.getCount());//10





