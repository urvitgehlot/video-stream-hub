import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data;
};

