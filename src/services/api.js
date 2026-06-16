const API_KEY = "950c9e23890a6cc94a4a7a33a2e7f357";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () =>{
    const response = await fetch(`${BASE_URL}/movie/popular/api_key=${API_KEY}`);
   const data = await resonse.json();
   return data.results;
};

export const searchMovies = async (searchQuery) =>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
   const data = await resonse.json();
   return data.results;
};