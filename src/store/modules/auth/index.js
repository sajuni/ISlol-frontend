import { authApi } from 'Api';
import Vue from 'vue';
import User from '@/models/user/User';
import router from '@/router';

/**
 * Auth Module
 */
const state = {
    user: null,
    token: null,
    refreshToken: null,
    type: null,
    isValidateJwtToken: false,
    isWrongPassword: false,
}

// getters
const getters = {
    getUser: state => {
        return state.user;
    },
    getToken: state => {
        return state.token;
    },
    getRefreshToken: state => {
        return state.refreshToken;
    },
    getType: state => {
        return state.type;
    },
    isValidateJwtToken: state => {
        return state.isValidateJwtToken;
    },
    isWrongPassword: state => {
        return state.isWrongPassword;
    },
    getRoles: state => {
        return state.user.roles[0];
    }
}

// actions
const actions = {
    signin(context, payload) {
        const member = payload;
        return authApi.signin(member.memberEmail, member.memberPwd)
            .then(res => {
                context.commit('signinSuccess', res);
            })
            .catch(err => {
                console.log('error', err);
            })
    },
    signup(context, payload) {
        return authApi.signup(payload)
            .then(res => {
                context.commit('signupSuccess', res);
            })
            .catch(err => {
                console.log('error', err);
            })
    },
    logout(context) {
        context.commit('logout');
    },
    clear(context) {
        context.commit('clear');
    },
    // setData(context) {
    //     context.commit('setData');
    // },
    refreshToken(context, payload) {
        return authApi.refreshToken(payload)
            .then(response => {
                context.commit('refreshToken', response);
            }, error => {
                console.log('error', error);
            })
    },
    
}

// mutations
const mutations = {
    signinSuccess(state, res) {
        if (res.resultCode === '0000') {
            state.isWrongPassword = false;

            const data = res.data;

            state.user = new User(data.email, data.userNm, data.roles[0], data.addr);
            state.token = data.token;
            state.refreshToken = data.refreshToken;
            state.type = data.type;

            // localStorage.user = JSON.stringify(state.user);
            // localStorage.token = state.token;
            // localStorage.refreshToken = state.refreshToken;
            // localStorage.type = state.type;
           
        setTimeout(() => {
            router.push({ name: "Main" });
        }, 100);

            Vue.notify({
                group: 'loggedIn',
                type: 'success',
                text: '로그인에 성공했습니다.'
            });

        } else if (res.resultCode === '9999') { //계정 오류
            state.isWrongPassword = true;
        } else { //통신 오류
            alert('Error:: ' + res.resultMessage);
        }
    },
    signupSuccess(state, res) {
        if (res.resultCode === '0000') {

            router.push({ name: "LoginOn" });

            Vue.notify({
                group: 'loggedIn',
                type: 'success',
                text: '계정을 생성했습니다.'
            });
        }
    },
    logout(state) {
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.type = null;

        Vue.notify({
            group: 'loggedIn',
            type: 'success',
            text: '로그아웃 완료!!'
        });
        
        localStorage.clear();
        router.push({ name: 'LoginOn' });

    },
    clear(state) {
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.type = null;
        localStorage.clear();
    },
    // setData(state) {
    //     const data = JSON.parse(localStorage.getItem('vuex')).auth;
    //     state.user = new User(data.user.email, data.user.userNm, data.user.roles[0], data.user.addr);
    //     state.token = data.token;
    //     state.refreshToken = data.refreshToken;
    //     state.type = data.type;
    // },
    refreshToken(state, response) {
        if (response.resultCode === '0000' && response.data !== '') {
            const data = response.data;
            // state.user = new User(data.email, data.userNm, data.roles[0], data.addr);
            state.token = data.token;
            state.refreshToken = data.refreshToken;
            // state.type = data.type;

            // localStorage.user = JSON.stringify(state.user);
            // localStorage.token = state.token;
            // localStorage.refreshToken = state.refreshToken;
            // localStorage.type = state.type;
        }
        if (response.resultCode === 'error') {
            alert('다시 로그인 해주세요');
            state.user = null;
            state.token = null;
            state.refreshToken = null;
            state.type = null;
            localStorage.clear();

            router.push({ name: 'LoginOn' });
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}