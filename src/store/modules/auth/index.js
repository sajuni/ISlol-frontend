import { authApi } from 'Api';
import Nprogress from 'nprogress';
import Vue from 'vue';
import User from '~/models/User';
import router from '~/router';

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

}

// actions
const actions = {

}

// mutations
const mutations = {
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}