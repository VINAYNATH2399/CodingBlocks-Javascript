
// first class function
//        or
// why functions are called first class citizens in JS
// let step1 = function(){

// }   

let step1 = function(){
    console.log('selecting image');
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('image.jpg');
        }, 4000)
    });
}
let step2 = function(image){
    console.log(`applying filter to ${image}`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('filter applied to image.jpg');
        }, 2000)
    });
}
let step3 = function(filter){
    console.log(`Adding caption to ${filter}`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('all done image uploaded');
        }, 3000)
    });
}
let step4 = function(caption){
    console.log(`Image uploading plz wait...`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('caption added');
        }, 5000)
    });
}

// step1().then().catch()
// promise chaining
step1()
.then(function(image){
    console.log('image selected');
    return step2(image)
})
.then(function(filter){
    console.log('filter applied');
    // console.log(filter);
    return step3(filter)
})
.then(function(comment){
     console.log(`${comment} to the image`);
     return step4()
})
.then(function(final){
   console.log(final);
})
.catch(function(error){
    console.log(error);
})
// In this code chanining of .then()
// Is problem se bachne ka tarika "Async-await".
// cbhell -> Promise -> async-await