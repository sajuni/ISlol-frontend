<template>
  <div class="auth_outer_wrap">
    <div class="auth_inner_wrap">
      <router-link class="logo" :to="{ name: 'SignIn' }"
        ><h1 class="pb-15">회원가입</h1></router-link
      >
      <v-row>
        <v-col>
          <v-form ref="sign_from">
            <v-text-field
              outlined
              label="아이디"
              type="text"
              v-model="signUpInfo.memberId"
            >
            </v-text-field>
            <v-text-field
              outlined
              label="비밀번호"
              type="password"
              v-model="signUpInfo.memberPw"
            >
            </v-text-field>
            <v-text-field
              outlined
              label="비밀번호확인"
              type="password"
              v-model="signUpInfo.memberPwValied"
            >
            </v-text-field>
            <v-text-field
              outlined
              label="이름"
              type="text"
              v-model="signUpInfo.memberName"
            >
            </v-text-field>
            <v-text-field
              outlined
              label="이메일"
              type="email"
              v-model="signUpInfo.memberEmail"
            >
            </v-text-field>
            <v-text-field
              outlined
              label="닉네임"
              type="text"
              v-model="signUpInfo.memberNick"
            >
            </v-text-field>
            <v-text-field
              outlined
              label="폰번호"
              type="email"
              v-model="signUpInfo.memberTel"
            >
            </v-text-field>
          </v-form>
        </v-col>
      </v-row>
      <v-btn class="mb-3" block color="success" x-large @click="signUp"
        >가입하기</v-btn
      >
    </div>
  </div>
</template>
<script lang="ts">
import { SignUpModel } from '@/service/auth/model/SignUpModel';
import { useAuthStore } from '@/service/auth/modules/auth';
import { defineComponent, reactive } from '@vue/composition-api';

const authStore = useAuthStore();
export default defineComponent({
  name: 'SignUp',
  setup() {
    let signUpInfo: SignUpModel = reactive({
      id: '',
      pw: '',
      name: '',
      email: '',
      nick: '',
      mobileNum: '',
    });

    const signUp = async () => {
      await authStore.singUp(signUpInfo);
    };

    return { signUpInfo, signUp, authStore };
  },
});
</script>
<style lang=""></style>
