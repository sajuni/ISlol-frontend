<template>
  <v-container>
    <div class="auth_inner_wrap" :style="height">
      <h1 class="pb-15">로그인</h1>
      <v-row justify="center">
        <v-col sm="7" md="6" lg="5" xl="3">
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
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
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
    let height = ref('');
    onMounted(() => {
      height.value = `padding-top:${document.body.clientHeight / 5}px`;
    });
    return { signIn, signInForm, height };
  },
});
</script>

<!-- <style lang="scss">
@import '@/assets/scss/auth.scss';
</style> -->
