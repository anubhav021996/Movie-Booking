// Store the wallet amount to your local storage with key "amount"
let wallet= JSON.parse(localStorage.getItem("amount")) || 0;
document.getElementById("wallet").innerText= wallet;

document.getElementById("add_to_wallet").addEventListener("click",()=>{
    let money= document.getElementById("amount").value;
    wallet+= +money;
    localStorage.setItem("amount",JSON.stringify(wallet));
    document.getElementById("wallet").innerText= wallet;
    document.getElementById("amount").value=null;
});

document.getElementById("book_movies").addEventListener("click",()=>{
    window.location.href="./movies.html";
});
