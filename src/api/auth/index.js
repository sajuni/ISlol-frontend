import commonApi from '../common/commonApi';

const common = new commonApi('auth');

const authApi = {
    signup: (user) => {
        return common.post(common.config.AUTH_URL + 'signup', user);
    },
    signin: (memberEmail, memberPwd) => {
        return common.post(common.config.AUTH_URL + 'signin', { memberEmail, memberPwd });
    },
    refreshToken: (token) => {
        return common.post(common.config.AUTH_URL + 'refreshtoken', token);
    },
    update: (member) => {
        return common.patch(`${common.config.AUTH_URL}${member.memberSeq}/update`, member);
    }
}

export default authApi;