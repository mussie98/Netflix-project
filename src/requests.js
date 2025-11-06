const  api_key="346d6cefc6e6be23d08e9c108750ce43";

const requests = {
  fetchTrending:
    `/trending/all/week?api_key=${api_key}&language=en-us`,
  fetchNetflixOriginals:
    `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRatedMovies:
    `/movie/top_rated?api_key=${api_key}&language=en-us`,
  fetchActionMovies:
    `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies:
    `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies:
    `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies:
    `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentaries:
    `/discover/movie?api_key=${api_key}&with_genres=99`,
};
export default requests;
