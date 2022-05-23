<template>
  <div class="auth_outer_wrap">
    <div class="auth_inner_wrap">
      <router-link class="logo" :to="{ name: 'LoginOn' }"
        ><h1 class="pb-15">회원가입</h1></router-link
      >
      <v-row>
        <v-col>
          <v-form ref="sign_from">
            <v-text-field outlined label="아이디" type="text"> </v-text-field>
            <v-text-field outlined label="비밀번호" type="password">
            </v-text-field>
            <v-text-field outlined label="비밀번호확인" type="password">
            </v-text-field>
            <v-text-field outlined label="이름" type="text"> </v-text-field>
            <v-text-field outlined label="닉네임" type="text"> </v-text-field>
            <v-text-field outlined label="이메일" type="email"> </v-text-field>
          </v-form>
        </v-col>
      </v-row>
      <v-btn class="mb-3" block color="success" x-large>가입하기</v-btn>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'SignIn',
  setup() {
    return {};
  },
});
</script>
<style lang=""></style>
