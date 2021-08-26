import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://hml.finance.canismajorisadm.com.br'
});