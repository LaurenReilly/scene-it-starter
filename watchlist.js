document.addEventListener("DOMContentLoaded", function() {
    var movies = JSON.parse(localStorage.getItem("watchlist"));
    console.log(movies);
    var watchList = movies.map(function(movie) {
        return `
            <div class="card my-2" style="width: 20rem; height: auto;">
                <img class="card-img-top" src="${movie.Poster}" alt="Movie Poster">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                </div>
            </div>
        `
    });
    movieContainer.innerHTML = watchList.join("");
});