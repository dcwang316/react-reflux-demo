import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:8000/backend/',
  timeout: 1000
});