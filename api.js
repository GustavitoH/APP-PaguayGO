import axios from 'axios';

const API = 'https://paguaygo.herokuapp.com/api/'

export const getUsuario = (data) => {
  return axios.post(API + 'deudor', data);
}

export const getDeudor = (id) => {
  return axios.get(API + 'deudores/' + id);
}

export const getPagos = (path) => {
  return axios.get(API + path);
}

export const getServicios = (path) => {
  return axios.get(API + path);
}
