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
    }
}

// mutations
const mutations = {
    async signinSuccess(state, res) {
        if (res.resultCode === '0000') {
            state.isWrongPassword = false;
            
            const data = res.data;

            state.user = new User(data.id, data.pwd, data.userNm, data.roles[0]);
            state.token = data.token;
            state.refreshToken = data.refreshToken;
            state.type = data.type;

            router.push({name: "Main"});

            setTimeout(function() {
                Vue.notify({
                    group: 'loggedIn',
                    type: 'success',
                    text: '로그인에 성공했습니다.'
                });
            }, 1500);
        } else if (res.resultCode === '9999') { //계정 오류
            state.isWrongPassword = true;
        } else { //통신 오류
            alert('Error:: ' + res.resultMessage);
        }
    },
    signupSuccess(state, res) {
        if (res.resultCode === '0000') {

            router.push({ name: "LoginOn"});

            Vue.notify({
                group: 'loggedIn',
                type: 'success',
                text: '계정을 생성했습니다.'
            });
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}