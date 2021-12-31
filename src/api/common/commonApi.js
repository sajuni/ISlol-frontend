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
        }, async(error) => {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                await store.dispatch('auth/refreshToken');
                originalRequest.headers['Authorization'] = 'Bearer ' + store.getters['auth/getToken'];
                return axios(originalRequest);
            }
            if (error.response.status === 403) {
                alert('접근권한이 없습니다');
                router.push('/default/dashboard/ecommerce');
            }
            return Promise.reject(error);
        });

    }


    async get(url, isCommonAlert) {
        try {
            const response = await this.axios.get(url);

            return this.parseResponse(response, isCommonAlert);
        } catch (err) {
            return this.getErrorData(err);
        }

    }

    async post(url, param, isCommonAlert) {
        try {
            const response = await this.axios.post(url, param);

            return this.parseResponse(response, isCommonAlert);
        } catch (err) {
            return this.getErrorData(err);
        }

    }

    parseResponse(response, isCommonAlert) {
        const responseHead = response.data.head;
        const responseBody = response.data.body;

        if (responseHead.resultCode != '0000'& isCommonAlert ) {
            if(responseHead.resultCode != 'EXRS9003' && responseHead.resultCode != 'CMRS9002'){
                alert('Error:: ' + responseHead.resultMessage);
            }
        }

        return {
            resultCode: responseHead.resultCode,
            resultMessage: responseHead.resultMessage,
            data: responseBody
        };

    }

    getErrorData(err) {
        console.log('getErrorData', err);
        return {
            resultCode: 'error',
            resultMessage: err.toString(),
            data: {}
        };
    }
}
export default apiCommon