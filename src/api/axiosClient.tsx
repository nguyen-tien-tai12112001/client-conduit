import axios from "axios";

const API = axios.create({ baseURL: 'https://server-conduit.herokuapp.com/' });

API.interceptors.request.use((req:any) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile') as string).token
    }`;
  }
  return req;
});

export default API