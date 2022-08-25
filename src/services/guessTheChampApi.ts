import axios from "axios";

const guessTheChampApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export { guessTheChampApi };
