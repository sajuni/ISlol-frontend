import axios from 'axios';
import { ContentTypeEnum } from '../enum/httpEnum.js';

function createAxios() {
  return axios.create({
    headers: { 'Content-Type': ContentTypeEnum.JSON },
    timeout: 10 * 1000,
    baseURL: '/api/',
  });
}

export const defHttp = createAxios();
