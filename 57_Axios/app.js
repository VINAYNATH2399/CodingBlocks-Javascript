

// 3rd party library-> saara sata -> promise return
// axios -> returns a promise and awaits for the entire data at once


axios.get('https://api.tvmaze.com/search/shows?q=girls')

.then(function(response){
    console.log(response);
})
.catch(function(eror){
    console.log(error);
})




