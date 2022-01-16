<template>
    <div>
        <t-area>
            <template #title>회원정보</template>
            <template #text></template>
            <template #content>
            <div class="member_info_form">    
                <b-form>
                    <b-form-input
                        class="mb-4"
                        v-model="email"
                        type="email"
                        placeholder="이메일"
                        disabled
                    ></b-form-input>
                    <div class="mb-4">
                        <b-form-input
                            v-model="oldpwd"
                            type="password"
                            placeholder="현재 비밀번호"
                        >
                        </b-form-input>
                        <div class="error-message" v-if="validation !== undefined"> {{ validation.firstError('oldpwd') }} </div>
                    </div>
                    <div class="mb-4">
                        <b-form-input
                            v-model="newpwd"
                            type="password"
                            placeholder="새 비밀번호"
                        >
                        </b-form-input>
                        <div class="error-message" v-if="validation !== undefined"> {{ validation.firstError('newpwd') }} </div>
                    </div>
                    <div class="mb-4">
                        <b-form-input
                            v-model="newpwd2"
                            type="password"
                            placeholder="새 비밀번호 확인"
                        >
                        </b-form-input>
                        <div class="error-message" v-if="validation !== undefined"> {{ validation.firstError('newpwd2') }} </div>
                    </div>
                    <div class="mb-4">
                        <b-form-input
                            v-model="addr"
                            type="text"
                            placeholder="주소"
                        >
                        </b-form-input>
                        <div class="error-message" v-if="validation !== undefined"> {{ validation.firstError('addr') }} </div>
                    </div>
                    <div class="mb-4">
                        <b-form-input
                            v-model="nick"
                            type="text"
                            placeholder="닉네임"
                        >
                        </b-form-input>
                        <div class="error-message" v-if="validation !== undefined"> {{ validation.firstError('nick') }} </div>
                    </div>
                </b-form>
                <div class="mt-5 mb-5">
                    <b-button size="lg" variant="primary" @click="update()">변경</b-button>
                    <b-button size="lg" @click="cancel()">취소</b-button>
                </div>
            </div>
            </template>
        </t-area>
        <b-form-input
            v-model="seq"
            type="text"
            hidden
        >
        </b-form-input>
    </div>
</template>

<style scoped>
.form-group { text-align: left !important}
.form-control { 
    width: 450px;
    height: 50px;
}
</style>

<script>
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator; 
export default {
    data() {
        return {
            email: "",
            oldpwd: "",
            newpwd: "",
            newpwd2: "",
            addr: "",
            seq: "",
            nick: ""
        }
    },
    mounted() {
        const user = this.$store.getters['auth/getUser'];
        this.seq = user.seq;
        this.email = user.email;
        this.addr = user.addr;
        this.nick = user.nick;
    },
    validators: { 
        oldpwd: function (value) {
            return Validator.value(value).required(); 
        }, 
        newpwd: function (value) {
            return Validator.value(value).required(); 
        }, 
        'newpwd2, newpwd': function(newpwd2, newpwd) {
            return Validator.value(newpwd2).required().match(newpwd);
        },
        addr: function (value) {
            return Validator.value(value).required(); 
        }, 
        nick: function (value) {
            return Validator.value(value).required(); 
        }, 
    },
    methods: {
        update() {
            this.$validate();

            // 벨리데이션 성공 시
            if (!this.validation.errors.length) {
                const member = {
                    memberEmail: this.email,
                    memberSeq: this.seq,
                    memberoldPwd: this.oldpwd,
                    memberPwd: this.newpwd,
                    memberAddr: this.addr,
                    memberNick: this.nick
                }
                this.$store.dispatch("auth/update", member);
            } 
            
        },
        cancel() {
            this.$router.go(-1);
        },

    },
    
}
</script>