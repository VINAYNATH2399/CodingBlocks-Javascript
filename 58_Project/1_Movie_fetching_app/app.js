let ul = document.getElementById('movie-list')

async function movieFetch(search){
   let data = await fetch(`https://api.tvmaze.com/search/shows?q=${(search)}`).then(async(res)=>{

       console.log(await res.json());
   }) 
}  
movieFetch('jaavan')