import axios from 'axios';

const api = axios.create({
  baseURL: 'https://http.cat/100',
});

export const fetchData = () => api.get('/data');

export default api;
