import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_URL = 'api_key=adefcfc38a20bb4e0e69bacf747b4806';

export const trendingMovieFetch = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/all/day?${KEY_URL}`);
  return data.results;
};

export const searchMovieFetch = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?${KEY_URL}&language=en-US&page=1&include_adult=false&query=${query};`
  );
  return data.results;
};

export const descriptionMovieFetch = async id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}?${KEY_URL}`);
  return data;
};

export const castMovieFetch = async id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/credits?${KEY_URL}&language=en-US`
  );
  console.log(data);

  return data;
};

export const reviewMovieFetch = async id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?${KEY_URL}&language=en-US&page=1`
  );
  return data.results;
};
