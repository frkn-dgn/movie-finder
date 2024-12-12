import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  return response.data.Search || [];
};

export const fetchMoviesByGenre = async (genre) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&type=movie&s=${genre}`);
  return response.data.Search || [];
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  return response.data;
};
