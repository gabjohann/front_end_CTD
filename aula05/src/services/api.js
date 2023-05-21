import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api-todo-six.vercel.app/',
});
