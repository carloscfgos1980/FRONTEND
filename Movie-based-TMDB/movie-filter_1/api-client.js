const API_KEY = 'api_key=cdb6e4fe4726f8b1dffbdff2eb676e52';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY // Same as API_URL just change "discover" for "search"  and then can be add the end points (ex: popularity)