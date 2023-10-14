
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

function getMovie(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}

getMovie(API_URL);

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        //https://developers.themoviedb.org/3/getting-started/images to find the path

        movieElement.innerHTML = `
        
        <img src="${IMG_URL + poster_path}" alt="${title}">

        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
            ${overview}
        </div>
        
        
        `

        main.appendChild(movieElement);
    })
}

function getColor(vote) {
    if (vote >= 8) {
        return "green"
    } else if (vote >= 5) {
        return "orange"
    } else {
        return "red"
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value

    if (searchTerm) {
        getMovie(searchURL + '&query=' + searchTerm);
    } else {
        getMovie(API_URL);
    }
})