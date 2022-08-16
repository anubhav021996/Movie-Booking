// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wallet= JSON.parse(localStorage.getItem("amount")) || 0;
document.getElementById("wallet").innerText= wallet;

let movie= JSON.parse(localStorage.getItem("movie"));

let append= (data) => {
    let container= document.getElementById("movie");
    let img= document.createElement("img");
    img.src=data[0];
    let h3= document.createElement("h1");
    h3.innerText=data[1];
    container.append(img,h3);
}

append(movie);

document.getElementById("confirm").addEventListener("click",()=>{
    let no= +document.getElementById("number_of_seats").value;
    let amount= no*100;
    if(amount>wallet){
        alert("Insufficient Balance!");
        return;
    }
    wallet-= amount;
    localStorage.setItem("amount",JSON.stringify(wallet));
    document.getElementById("wallet").innerText= wallet;
    document.getElementById("number_of_seats").value=null;
    document.getElementById("user_name").value=null;
    alert("Booking successful!");
});