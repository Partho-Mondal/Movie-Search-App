
// Most popular movie API
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=3";
// Image Path URL
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// Searched Movie
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector("#movie-box");

const getMovies = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data);
    showMovie(data.results);
}

const showMovie = (data) => {
    // movieBox.innerHTML = "";
    data.forEach(element => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
        <img src="${IMGPATH + element.poster_path}" alt="">
        <div class="overlay">
            <div class="title">
                <h2>${element.title}</h2>
                <span>${element.vote_average}</span>
            </div>
            <h3>Overview</h3>
            <p>
                ${element.overview}
            </p>
        </div>
        `;
        movieBox.appendChild(box);
    });
}

document.querySelector("#search").addEventListener(
    "keyup",
    function(event) {
        if(event.target.value != ""){
            movieBox.innerHTML = "";
            getMovies(SEARCHAPI + event.target.value);
        } else {
            // getMovies(APIURL);
            movieBox.innerHTML = "";
            for(let i = 1; i < 21; i++) {
                getMovies(APIURL+i);
            }
        }
    }
)
// Initial Call
// getMovies(APIURL);

for(let i = 1; i < 21; i++) {
    getMovies(APIURL+i);
}
