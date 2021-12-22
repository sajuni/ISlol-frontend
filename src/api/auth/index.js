import commonApi from '../common/commonApi';

const common = new commonApi('auth');

const authApi = {
    signup: (user) => {
        return common.post(common.config.AUTH_URL + 'signup', user , true);
    },
    signin: (memberEmail, memberPwd) => {
        return common.post(common.config.AUTH_URL + 'signin', { memberEmail, memberPwd }, false);
    },
    refreshToken: (token) => {
        return common.post(common.config.AUTH_URL + 'refreshtoken', token, false);
    }
}

export default authApi;