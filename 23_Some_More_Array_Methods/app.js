
// ---------1.   ForEach() -- loop
// syntax:- 1. It accepts a callback function
//          2. only for array
//          3. Array ke each item mai jaye aur kaam karaye

// let worldCup = ['india', 'australia', 'pakistan', 'new zealand', 'sri lanka']

// forEach() -> method whhich accepts a cb function
// worldCup.forEach(); -> syntax

// worldCup.forEach(function(item){ // item -> just a regular variable
//     console.log(item);
// } );

// worldCup.forEach(function(item, index){ // index -> just a regular variable
//     console.log(index + '--> '+ item);
// } );

// -------------------------------------

// ----   2. map()----  method
// 1. It accepts a callback function
// 2. only for array
// 3. Array ke each item mai jaye aur kaam karaye
// 4. New array return
// 5. Length for sure
// worldCup.map() --> syntax -> HOF

// let worldCup = ['india', 'australia', 'pakistan', 'new zealand', 'sri lanka']
// let number = [10,20,30,40,50]

// let newArray = worldCup.map(function(item){
    //     return item.toUpperCase();
    // })
    
    // let newSqrArray = number.map(function(item){ // return a new array
    //     return item*item
    // })
    // let newSqrArray = number.map(function(item, index){
        //     return item*index
        // })
        
        // console.log(worldCup);
        // console.log(newArray);
        // console.log(number);
        // console.log(newSqrArray);
        
// ----------3. filter()        

// 1. It accepts a callback function
// 2. only for array
// 3. Array ke each item mai jaye aur kaam karaye
// 4. New array return
// 5. Number of elements on the new array

// let numbers = [10,20,30,40,50]
// let filterArray = numbers.filter(function(item){
//     if(item >= 30){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(numbers);
// console.log(filterArray);


// ----------- 4. reduce()

