<template>
	<div class="container">
		<b-card
		header="회원가입"
		style="max-width: 40rem; margin: auto; margin-top: 10vh;"
		class="mb-2"
		border-variant="info"
		align="left"
		>
			<b-form-input
				v-model="memberEmail"
				class="login_form"
				type="email"
				placeholder="이메일"
			></b-form-input>
			<b-form-input
				v-model="memberPwd" 
				class="login_form"
				type="password"
				placeholder="비밀번호"
			></b-form-input>
			<b-form-input
				v-model="memberNm" 
				class="login_form"
				placeholder="이름"
			></b-form-input>
			<b-form-input
				v-model="memberAddr" 
				class="login_form"
				placeholder="주소"
			></b-form-input>
			<b-button
				id="btn_login"
				variant="success"
				size="lg"
				class="mt-4"
				@click="submit"
				:disabled="validation"
			>
			가입하기
			</b-button>
		</b-card>
	</div>
	
</template>

<script>
export default {
  	data() {
		return {
		memberEmail: "",
		memberPwd: "",
		memberNm: "",
		memberAddr: ""
		}
 	},
	methods: {
		submit() {
			let signUpVO = {
				email: this.memberEmail,
				pwd: this.memberPwd,
				name: this.memberNm,
				addr: this.memberAddr
			}
			this.$store.dispatch("auth/signup", signUpVO);
		}
	},
	computed: {
		validation() {
			if (this.memberEmail.trim().length > 0 && this.memberPwd.trim().length > 0 && this.memberNm.trim().length > 0 && this.memberAddr.trim().length > 0) {
				return false;
			} else {
				return true;
			}
		}
	}
}
</script>