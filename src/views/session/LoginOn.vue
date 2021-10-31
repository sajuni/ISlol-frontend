<template>
    <div>
        <div class="header">
            <a href="#">로고자리</a>
        </div>
        <div class="container">
            <div class="login_wrap">
                <ul class="panel_wrap">
                    <li class="panel_item">
                        <div class="panel_inner">
                            <div class="id_pw_wrap">
                                <b-form-input 
                                v-model="memberEmail"
                                class="login_form" 
                                placeholder="아이디">
                                </b-form-input>
                                <b-form-input
                                v-model="memberPwd" 
                                class="login_form" 
                                type="password"
                                placeholder="비밀번호">
                                </b-form-input>
                            </div>
                            <div class="btn_login">
                                <b-button id="btn_login" variant="success" size="lg" @click="submit">로그인</b-button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="find_wrap"> 
                <li>
                    <a href="#" class="find_text">비밀번호 찾기</a>
                </li>
                <li>
                  <a href="#" class="find_text">아이디 찾기</a>
                </li>
                <li>
                   <router-link :to="{ name: 'SignUp'}">회원가입</router-link><!-- <a href="#" class="find_text">회원가입</a> -->
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
.container {
width: 550px !important;
}
.header {
    padding-bottom: 69px;
}
.panel_wrap {
    position: relative;
    z-index: 3;
    margin-top: -8px;
}
.panel_item { 
    border: 1px solid #c6c6c6;
    border-radius: 6px;
    background-color: #fff;
}
.panel_inner {
    padding: 24px;
}
.login_form {
    padding: 15px !important;
} 
.btn_login {
    margin-top: 40px;
}
#btn_login {
    width: 100%;
}
.find_wrap {
    padding: 24px 0 40px; 
    text-align: center;
}
.find_wrap .find_text {
    display: inline-block;
    font-size: 16px;
    line-height: 18px;
    text-decoration: none;
    color: #888;
}

.find_wrap li {
    position: relative;
    display: inline-block;
}

.find_wrap li+li, .relogin_find_wrap li+li {
    padding-left: 28px;
}
</style>

<script>
export default {
    data() {
        return {
            memberEmail: "",
            memberPwd: "",
        }
    },
    methods: {
        submit() {
            let member = {
                memberEmail: this.memberEmail,
                memberPwd: this.memberPwd
            }
            this.$store.dispatch("auth/signin", member);
        }
    },
}
</script>