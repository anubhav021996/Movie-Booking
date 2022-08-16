// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let wallet= JSON.parse(localStorage.getItem("amount")) || 0;
document.getElementById("wallet").innerText= wallet;

document.getElementById("search").addEventListener("input",()=>{
    debounce(getMovies,2000);
});

async function getMovies(){
    let q= document.getElementById("search").value;
    if(q.length<=3) return;
    let res= await fetch(`https://www.omdbapi.com/?apikey=a20a6966&s=${q}`)
    let data= await res.json();
    append(data.Search);
    console.log(data.Search);
}

let append= (data) => {
    let container= document.getElementById("movies");
    container.innerHTML= null;
    data.map(({Poster,Title})=>{
        let div= document.createElement("div");
        div.className="movie_tab";
        let img= document.createElement("img");
        img.src=Poster;
        let h3= document.createElement("h3");
        h3.innerText=Title;
        let mov=[Poster,Title];
        let button= document.createElement("button");
        button.className="book_now";
        button.innerText="Book now";
        button.addEventListener("click",()=>{
            localStorage.setItem("movie",JSON.stringify(mov));
            window.location.href="./checkout.html";
        })
        div.append(img,h3,button);
        container.append(div);
    });
}

let id;
let debounce= (func,delay) => {
    if(id) clearTimeout(id);
    id= setTimeout(()=>{
        func();
    },delay);
}