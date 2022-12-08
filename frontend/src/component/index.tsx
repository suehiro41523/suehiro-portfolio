import axios from 'axios';
const url = 'http://localhost:1337/api/estates';
export const readEstates = () => axios.get(url);
