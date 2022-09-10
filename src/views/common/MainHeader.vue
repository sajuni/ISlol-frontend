<template>
  <div class="header">
    <div class="login-from mt-5">
      <v-btn small>로그인</v-btn>
    </div>
    <div class="container">
      <v-tabs dark>
        <v-tab>홈</v-tab>
        <v-tab>공지사항</v-tab>
        <v-tab>방송 다시보기</v-tab>
        <v-tab>사진첩</v-tab>
        <v-tab>TOP랭킹</v-tab>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    let bottomNav = ref('');

    return { bottomNav };
  },
});
</script>

<style scoped>
.header {
  background-color: #1e1e1e;
}
.login-from {
  display: flex;
  float: right;
  margin-right: 20px;
}
</style>
