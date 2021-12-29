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
                                class="login_form mt-2" 
                                type="password"
                                placeholder="비밀번호"
                                @keyup.enter="submit">
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
                   <router-link :to="{ name: 'SignUp'}">회원가입</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

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