// Scope:-   Two types in let & const
// block {}
// script / local


// Scope:-   Two type in Var
// functional
// global 

function outer(){
    var b =10;
    inner();
    function inner(){
        var b = 1000;
        console.log(b);
    }
    console.log(b);
}
outer();


// {
//     var b =10;
//     {
//         var b = 1000;
//         console.log(b);
//     }
//     console.log(b);
// }
// outer();