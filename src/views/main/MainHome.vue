<template>
  <div class="container">
    <div class="search_area">
      <h1 class="my-10">IS LOL</h1>
      <v-text-field
        v-model="searchVal"
        outlined
        label="소환사 아이디를 입력해주세요"
        v-on:keyup.enter="search"
      >
        <template v-slot:append>
          <v-btn color="primary" class="ma-0" @click="search">검색</v-btn>
        </template>
      </v-text-field>
    </div>
    <div class="d-flex">
      <ratio-side :searchVal="searchVal" />
      <main-list />
    </div>
    <div class="list-content">테스트중</div>
    <div class="list-content">테스트중</div>
    <article>
      <div class="flexbox">
        <div class="item">content1</div>
        <div class="item">content2</div>
        <div class="item">content3</div>
        <div class="item">content4</div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RatioSide from '@/views/main/component/RatioSide.vue';
import MainList from '@/views/main/component/MainList.vue';

export default defineComponent({
  name: 'MainHome',
  components: { RatioSide, MainList },
  setup() {
    const searchVal = ref('');
    const search = async () => {};

    return { searchVal, search };
  },
});
</script>

<style scoped>
.list-content {
  display: inline-block;
  vertical-align: top;
}
.search_area {
  max-width: 800px;
}
</style>
