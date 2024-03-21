// INSTRAGRAM
// Step-1 -> Select image       4s
// step-2 -> filter             2s
// step-3 -> caption            3s 
// step-4 -> upload             5s 

function step1(fn){
    console.log(`please wait image is being selected...`);
    setTimeout(function(){
        console.log('Image is selected now');
        fn('photo.jpg');   // step2 call ho rha hai
    },4000)
}

function step2(image, fn){  // filter function call
    console.log(`applying filter to the ${image}`);
    setTimeout(function(){
        console.log(`filter applied to the ${image}`);
        fn('filtered Image')  // step 3 ka function call
    },2000)
}
function step3(filter,fn){
    console.log(`adding caption to the ${filter}`);
    setTimeout(function(){
        console.log('caption done');
        fn('Image with caption') // step 4 ka function call
    },3000)
}
function step4(caption){
     console.log(`uploaded your final ${caption}`);
     setTimeout(function(){
        console.log('Image uploaded sucessfully');
     },5000)
}

// Horizontally grow -> pyramid of DOOM
//           OR
// Callback hell -> callback ke andar cb uske andar cb as so on...
// Process:- Step1 -> Step2 -> Step3 -> Step4
step1(function(image){
    step2(image, function(filter){
        step3(filter, function(caption){
            step4(caption)
        });
    });
})











