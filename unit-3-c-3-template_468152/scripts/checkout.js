// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
document.getElementById("wallet").innerText=JSON.parse(localStorage.getItem("amount") || [])
var data=JSON.parse(localStorage.getItem("movie")) || []
let movies_div=document.getElementById("movie");
data.forEach(function(el){
    
    let p=document.createElement("p");
    p.innerText=el.Title;
    let poster =document.createElement("img")
    poster.src=el.Poster;
  movies_div.append(p,poster,btn)
})
