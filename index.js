var movieContainer = document.getElementById("movieContainer");
var movieSearch = document.getElementById("movieSearch");

// document.addEventListener("DOMContentLoaded", function() {
//     renderMovies(movieData);
// });

function renderMovies(array) {
    var movies = array.map(function(movie){
        return `
            <div class="card my-2" style="width: 20rem; height: auto;">
                <img class="card-img-top" src="${movie.Poster}" alt="Movie Poster">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                    <a href="#" class="btn btn-success">Add to List</a>
                </div>
            </div>
        `
    });
    movieContainer.innerHTML = movies.join("");
}

document.getElementById("search-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var movieQuery = movieSearch.value.toLowerCase();
    var filteredMovies = movieData.filter(function(movie) {
        if (movie.Title.toLowerCase().indexOf(movieQuery) > -1) {
            return movie;
        } else if(movie.Year.toLowerCase().indexOf(movieQuery) > -1) {
            return movie;
        }
    });
    renderMovies(filteredMovies);
});