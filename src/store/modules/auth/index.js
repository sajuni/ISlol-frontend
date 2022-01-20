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
        return state.user.roles;
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
            }).catch(error => {
                console.log('error', error);
            })
    },
    update(context, payload) {
        return authApi.update(payload)
            .then(res => {
                context.commit('updateSuccess', res);
            }).catch(err => {
                console.log('err', err);
            })
    },
    
    
}

// mutations
const mutations = {
    signinSuccess(state, res) {
        if (res.resultCode === '0000') {
            const data = res.data;

            state.user = new User(data.id ,data.email, data.userNm, data.roles[0], data.addr, data.nick);
            state.token = data.token;
            state.refreshToken = data.refreshToken;
            state.type = data.type;
           
            setTimeout(() => {
                router.push({ name: "Main" });
            }, 100);

            Vue.notify({
                group: 'loggedIn',
                type: 'success',
                text: '로그인에 성공했습니다.'
            });

        } else { 
            if (res.resultMessage == 'ID/PW를 확인해 주세요.') {
                Vue.notify({
                    group: 'loggedIn',
                    type: 'error',
                    text: '계정 정보를 확인해주세요!!'
                });
            } else {
                alert(res.resultMessage);
            }
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
        } else {
            Vue.notify({
                group: 'loggedIn',
                type: 'error',
                text: res.resultMessage
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
        router.push({
            path: '/',
            query: { redirect: '' }
        });

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
            state.token = data.token;
            state.refreshToken = data.refreshToken;
        } else {
            state.user = null;
            state.token = null;
            state.refreshToken = null;
            state.type = null;
            localStorage.clear();

            router.push({
                path: '/',
                query: { redirect: '' }
            });
        }
    },
    updateSuccess(state, res) {
        if (res.resultCode === '0000') {
            const data = res.data.update;
            state.user = new User(data.memberSeq ,data.memberEmail, data.memberName, data.roles[0], data.memberAddr, data.memberNick);
            Vue.notify({
                group: 'loggedIn',
                type: 'success',
                text: '회원정보 수정완료!!'
            });

            router.push({ name: 'Main' });
        } else {
            Vue.notify({
                group: 'loggedIn',
                type: 'error',
                text: '비밀번호를 확인해 주세요!!'
            });
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