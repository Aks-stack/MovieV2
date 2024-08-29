
const API_KEY = "4e44d9029b1270a757cddc766a1bcb63";

const requests = {
    fetchCuratedList: `/list/8294945-curated?language=en-US&page=1&api_key=${API_KEY}`,
    fetchNowPlaying: `/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`,
    fetchTrendingDay: `/trending/movie/day?language=en-US&page=1&api_key=${API_KEY}`,
    fetchTrendingWeek: `/trending/movie/week?language=en-US&page=1&api_key=${API_KEY}`,
    fetchNetflixOriginal: `/discover/movie?api_key=${API_KEY}&with_production_companies=1024&language=en-US&page=1`,
    fetchTrendingTV: `/discover/tv?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc`,
    fetchTredingSearch: `/trending/all/week?api_key=${API_KEY}&include_adult=false&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

};

export default requests;
