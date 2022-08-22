<template>
  <div class="auth_outer_wrap">
    <div class="auth_inner_wrap">
      <h1 class="pb-15">로그인</h1>
      <v-row>
        <v-col>
          <v-form ref="form">
            <v-text-field
              v-model="signInForm.id"
              class="mb-2"
              outlined
              label="아이디"
              hide-details="Zauto"
            ></v-text-field>
            <v-text-field
              v-model="signInForm.pw"
              outlined
              label="비밀번호"
              type="password"
            ></v-text-field>
            <v-btn block color="success" x-large dark @click="signIn"
              >로그인</v-btn
            >
            <div class="find_wrap mt-6">
              <router-link class="pr-5" :to="{ name: '' }"
                >아이디 찾기</router-link
              >
              <router-link class="px-5" :to="{ name: '' }"
                >비밀번호 찾기</router-link
              >
              <router-link class="pl-5" :to="{ name: 'SignUp' }"
                >회원가입</router-link
              >
            </div>
          </v-form>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import { useAuthStore } from '@/service/auth/modules/auth';
import { SignInModel } from '@/service/auth/model/SignInModel';

const authStore = useAuthStore();
export default defineComponent({
  name: 'SignIn',
  setup() {
    let signInForm: SignInModel = reactive({ id: '', pw: '' });
    const signIn = async () => {
      await authStore.signIn(signInForm);
    };

    return { signIn, signInForm };
  },
});
</script>

<style lang="scss">
@import '@/assets/scss/auth.scss';
</style>
