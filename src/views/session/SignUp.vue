<template>
	<div class="container">
		<b-card
		header="회원가입"
		style="max-width: 40rem; margin: auto; margin-top: 10vh;"
		class="mb-2"
		border-variant="info"
		align="left"
		>
			<div class="mb-4">	
				<b-form-input
					v-model="memberEmail"
					class="login_form"
					type="email"
					placeholder="이메일"
				></b-form-input>
				<div class="error-message" v-if="validation !== undefined"> {{ validation.firstError('memberEmail') }} </div>
			</div>
			<div class="mb-4">
				<b-form-input
					v-model="memberPwd" 
					class="login_form"
					type="password"
					placeholder="비밀번호"
				></b-form-input>
				<div class="error-message" v-if="validation !== undefined"> {{ validation.firstError('memberPwd') }} </div>
			</div>
			<div class="mb-4">
				<b-form-input
					v-model="memberPwd2" 
					class="login_form"
					type="password"
					placeholder="비밀번호확인"
				></b-form-input>
				<div class="error-message" v-if="validation !== undefined"> {{ validation.firstError('memberPwd2') }} </div>
			</div>
			<div class="mb-4">
				<b-form-input
					v-model="memberNm" 
					class="login_form"
					placeholder="이름"
				></b-form-input>
				<div class="error-message" v-if="validation !== undefined"> {{ validation.firstError('memberNm') }} </div>
			</div>
			<div class="mb-4">
				<b-form-input
					v-model="memberAddr" 
					class="login_form"
					placeholder="주소"
				></b-form-input>
				<div class="error-message" v-if="validation !== undefined"> {{ validation.firstError('memberAddr') }} </div>
			</div>
			<div class="mb-4">
				<b-form-input
					v-model="memberNick" 
					class="login_form"
					placeholder="닉네임"
				></b-form-input>
				<div class="error-message" v-if="validation !== undefined"> {{ validation.firstError('memberNick') }} </div>
			</div>
			<b-button
				id="btn_login"
				variant="success"
				size="lg"
				class="mt-4"
				@click="submit"
			>
			가입하기
			</b-button>
		</b-card>
	</div>
	
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator; 
export default {
  	data() {
		return {
			memberEmail: "",
			memberPwd: "",
			memberPwd2: "",
			memberNm: "",
			memberAddr: "",
			memberNick: ""
		}
 	},
	methods: {
		submit() {
			this.$validate();

			// 벨리데이션 성공 시
			if (!this.validation.errors.length) {
				let signUpVO = {
					email: this.memberEmail,
					pwd: this.memberPwd,
					name: this.memberNm,
					addr: this.memberAddr,
					nick: this.memberNick
				}
				this.$store.dispatch("auth/signup", signUpVO);
			}

		}
	},
	validators: {
		memberEmail: function (value) {
            return Validator.value(value).required(); 
        }, 
        memberPwd: function (value) {
            return Validator.value(value).required(); 
        }, 
        'memberPwd2, memberPwd': function(newpwd2, newpwd) {
            return Validator.value(newpwd2).required().match(newpwd);
        },
        memberNm: function (value) {
            return Validator.value(value).required(); 
        }, 
        memberAddr: function (value) {
            return Validator.value(value).required(); 
        }, 
        memberNick: function (value) {
            return Validator.value(value).required(); 
        }, 
	}
	// computed: {
	// 	validation() {
	// 		if (this.memberEmail.trim().length > 0 && this.memberPwd.trim().length > 0 && this.memberNm.trim().length > 0 && this.memberAddr.trim().length > 0) {
	// 			return false;
	// 		} else {
	// 			return true;
	// 		}
	// 	}
	// }
}
</script>