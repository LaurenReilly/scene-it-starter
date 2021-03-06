var movieContainer = document.getElementById("movieContainer");

var movies;

// document.addEventListener("DOMContentLoaded", function() {
// });

function renderMovies(array) {
    var movies = array.map(function(movie){
        return `
            <div class="card my-2" style="width: 20rem; height: auto">
                <img class="card-img-top" src="${movie.Poster}" alt="Movie Poster">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                    <button onclick="saveToWatchlist('${movie.imdbID}')" class="btn btn-success">Add to List</button>
                </div>
            </div>
        `
    });
    movieContainer.innerHTML = movies.join("");
}

document.getElementById("search-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var movieSearch = document.getElementById("movieSearch").value;
    var encodedSearch = encodeURIComponent(movieSearch);
    axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + encodedSearch).then(function(response) {
        renderMovies(response.data.Search);
        movies = response.data.Search;
    });
});

//onclick of add to watchlist button will save data to watchlist.
function saveToWatchlist(imdbID) {
    movie = movies.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });
    var watchListJSON = localStorage.getItem("watchlist");
    var watchList = JSON.parse(watchListJSON);
    if (watchList === null) {
        watchList = [];
    }
    watchList.push(movie);
    watchListJSON = JSON.stringify(watchList);
    localStorage.setItem("watchlist", watchListJSON);
}