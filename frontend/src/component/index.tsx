import axios from 'axios';
export const url = 'http://localhost:1337';
export const readEstates = () => axios.get(url + `/api/estates?populate=*`);
