import axios from 'axios';
import { store } from '@/store/store';
import router from '@/router';
import commonConfig from './config/config';

class apiCommon {
    constructor(path) {
        this.init(path);
    }

    async init() {
        //const module = await import ('../' + path + '/config/config');
        this.config = commonConfig;
        this.axios = new axios.create({
            baseURL: this.config.BASE_URL
        });


        // Add a request interceptor
        this.axios.interceptors.request.use(
            config => {
                if (config.url == '/user/auth/refreshtoken') {
                    const refreshToken = store.getters['auth/getRefreshToken'];
                    if (refreshToken != null) {
                        config.headers['Authorization'] = 'Bearer ' + refreshToken;
                    }
                } else {
                    const token = store.getters['auth/getToken'];
                    if (token != null) {
                        config.headers['Authorization'] = 'Bearer ' + token;
                    }
                }
                return config;
            },
            error => {
                Promise.reject(error)
            });

        // Add a response interceptor
        this.axios.interceptors.response.use(async (response) => {
            return response;
        }, async (error) => {
            const originalRequest = error.config;
            const errorMessage = error.response.data.message;
            if (error.response.status === 401 && errorMessage != "ID/PW를 확인해 주세요.") {
                originalRequest._retry = true;
                await store.dispatch('auth/refreshToken');
                originalRequest.headers['Authorization'] = 'Bearer ' + store.getters['auth/getToken'];
                return axios(originalRequest);
            }
            if (error.response.status === 403) {
                alert('접근권한이 없습니다');
                router.push({
                    path: '/',
                    query: { redirect: '' }
                });
            }
            return Promise.reject(error);
        });

    }


    async get(url) {
        try {
            const response = await this.axios.get(url);
            return this.parseResponse(response);
        } catch (err) {
            return this.getErrorData(err.response);
        }

    }

    async post(url, param) {
        try {
            const response = await this.axios.post(url, param);
            return this.parseResponse(response);
        } catch (err) {
            return this.getErrorData(err.response);
        }

    }

    async put(url, param) {
        try {
            const response = await this.axios.put(url, param);
            return this.parseResponse(response);
        } catch (err) {
            return this.getErrorData(err.response);
        }

    }
    
    
    parseResponse(response) {
        const responseHead = response.data.head;
        const responseBody = response.data.body;
        // if (responseHead.resultCode != '0000') {
        //     alert('Error:: ' + responseHead.resultMessage);
        // }

        return {
            resultCode: responseHead.resultCode,
            resultMessage: responseHead.resultMessage,
            data: responseBody
        };

    }

    getErrorData(err) {
        return {
            resultCode: err.status,
            resultMessage: err.data.message,
            data: err.data
        };
    }
}
export default apiCommon