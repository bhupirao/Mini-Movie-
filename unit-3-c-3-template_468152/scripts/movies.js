// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

document.getElementById("wallet").innerText=JSON.parse(localStorage.getItem("amount") || [])
var data=JSON.parse(localStorage.getItem("movie")) || []

let movies_div =document.getElementById("movies")

let id;

async function searchmovies(){
    try{
        const q=document.getElementById("search").value;

        let res= await fetch(`https://www.omdbapi.com/?s=${q}&apikey=a6f5bd9`);

        let data = await res.json();
        let movies=data.Search;
        // console.log(movies)
        return movies;
    }catch (err){
        console.log(err)
    }
    }

     function appendMovies(data){
         movies_div.innerHTML=null;
         data.forEach(function(el){
    
             let p=document.createElement("p");
             p.innerText=el.Title;
             let poster =document.createElement("img")
             poster.src=el.Poster;
            let btn =document.createElement("button")
            btn.innerText="Book Movies";
            btn.addEventListener("click",function(){
                addBook(el);
            })

        
           movies_div.append(p,poster,btn)
         })
     }

     async function main() {
         let data=await searchmovies();
         if(data==undefined){
             return false;
         }
         appendMovies(data);
        }
         
     
     function debounce(func,delay){
         if(id){
             clearTimeout(id);
         }
         id=setTimeout(function() {
             func();
         },delay);
        }
        function addBook(el,index){
data.push(el);
window.location.href="checkout.html"
localStorage.setItem("movie",JSON.stringify(data))

        }