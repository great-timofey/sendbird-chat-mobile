import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://c379ea36.ngrok.io',
  headers: {
    'content-type': 'application/json',
  },
});
