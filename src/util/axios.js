import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bube-api.herokuapp.com/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export default instance;
