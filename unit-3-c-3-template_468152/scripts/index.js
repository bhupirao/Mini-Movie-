// Store the wallet amount to your local storage with key "amount"


document.getElementById("wallet").innerText=JSON.parse(localStorage.getItem("amount") || [])
function addWallet(){
   
   let  money=document.getElementById("amount").value;
    localStorage.setItem("amount",JSON.stringify(money))
    window.location.reload()
    
}
