


// web api -> which returns a promise
// Q Do we get the entire data
// ans:- no, it only return meta data (thoda sa data)

fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    // response // meta data
    return response.json() // parses the data and returns a promise -> saare packets ka wait
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})

// frtch -> by default -> get -> promise return krta hai
// json() -> promise return krta hai (wait krta hai) + pareses the data

