<template>
  <div class="container">
    <div class="main_search">
      <v-text-field
        v-model="searchVal"
        class="search_area px-5"
        outlined
        label="소환사 아이디를 입력해주세요"
        v-on:keyup.enter="search"
      >
        <template v-slot:append>
          <v-btn color="primary" class="ma-0" @click="search">검색</v-btn>
        </template>
      </v-text-field>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useMainStroe } from '@/service/main/moedules/main';

const mainStore = useMainStroe();
export default defineComponent({
  name: 'MainHome',
  setup() {
    const searchVal = ref('');

    const search = async () => {
      await mainStore.search(searchVal.value);
    };

    return { searchVal, search };
  },
});
</script>

<style scoped>
.main_search {
  text-align: -webkit-center;
}
.search_area {
  width: 50%;
}

.search_area .v-label {
  padding-left: 20px;
}
</style>
