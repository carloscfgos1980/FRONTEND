
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const tagsElement = document.getElementById('tags');




function getMovie(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        if (data.length !== 0) {
            showMovies(data.results);
        } else {
            main.innerHTML = `<h1 class="no-results">No Results Found</h1>`
        }
    })
}
let selectedGenre = []
function setGenre() {
    tagsElement.innerHTML = '';
    genres.forEach((genre) => {
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.id = genre.id;
        tag.innerHTML = genre.name;
        tag.addEventListener('click', () => {
            if (selectedGenre.length == 0) {
                selectedGenre.push(genre.id);
            } else {
                if (selectedGenre.includes(genre.id)) {
                    selectedGenre.forEach((id, idx) => {
                        if (id == genre.id) {
                            selectedGenre.splice(idx, 1);
                        }
                    })
                } else {
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre);
            getMovie(API_URL + '&with_genres=' + encodeURI(selectedGenre.join(',')))
            highlightSelection();
        })
        tagsElement.append(tag);
    })
}
setGenre();

function highlightSelection() {
    const tags = document.querySelectorAll('.tag');
    console.log(tags);
    tags.forEach(tag => {
        tag.classList.remove('highlight')
    })
    clearBtn();
    if (selectedGenre != 0) {
        selectedGenre.forEach(id => {
            const highlightedTag = document.getElementById(id);
            highlightedTag.classList.add('highlight');
        })
    }
}

function clearBtn() {
    let clearBtn = document.getElementById('clear');
    if (clearBtn) {
        clearBtn.classList.add('highlight')
    } else {
        let clear = document.createElement('div');
        clear.classList.add('tag', 'highlight');
        clear.id = 'clear';
        clear.innerHTML = 'Clear x';
        clear.addEventListener('click', () => {
            selectedGenre = [];
            setGenre();
            getMovie(API_URL);
        })
        tagsElement.append(clear);
    }
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
    selectedGenre = [];
    setGenre();
    if (searchTerm) {
        getMovie(searchURL + '&query=' + searchTerm);
    } else {
        getMovie(API_URL);
    }
})