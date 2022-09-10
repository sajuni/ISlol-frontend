<template>
  <v-card height="40px">
    <v-bottom-navigation v-model="bottomNav" color="primary">
      <v-btn bottomNav="home">
        <span>홈</span>
      </v-btn>

      <v-btn bottomNav="notice">
        <span>공지사항</span>
      </v-btn>

      <v-btn bottomNav="replay">
        <span>방송 다시보기</span>
      </v-btn>

      <v-btn bottomNav="photo">
        <span>사진첩</span>
      </v-btn>

      <v-btn bottomNav="top">
        <span>TOP랭킹</span>
      </v-btn>
    </v-bottom-navigation>
  </v-card>
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
  width: 100%;
  height: 48px;
}
</style>
