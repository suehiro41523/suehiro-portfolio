import axios from 'axios';
export const url = 'http://localhost:1337';
export const readEstates = async (): Promise<any> =>
  await axios.get(url + `/api/estates?populate=*`);
