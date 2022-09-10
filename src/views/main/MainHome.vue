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
    <aside class="rank">
      <div class="sr">
        <div class="sr-header">솔로랭크</div>
        <div class="rk-content">
          <img :src="soloRankHeader.img" />
          <div>
            <h1>{{ soloRankHeader.tier }}</h1>
            {{ soloRankHeader.lp }}
          </div>
          <div>
            {{ soloRankHeader.winLose }}<br />{{ soloRankHeader.ratio }}
          </div>
        </div>
      </div>
      <div class="tr">
        <div class="tr-header">자유랭크</div>
        <div class="rk-content">
          <img :src="teamRankHeader.img" />
          {{ teamRankHeader.tier }}
          {{ teamRankHeader.lp }}
          {{ teamRankHeader.winLose }}
          {{ teamRankHeader.ratio }}
        </div>
      </div>
    </aside>
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
import {
  computed,
  ComputedRef,
  defineComponent,
  ref,
} from '@vue/composition-api';
import { useMainStroe } from '@/service/main/moedules/main';
import { TeamRankHeader } from '@/service/main/model/TeamRankHeader';
import { SoloRankHeader } from '@/service/main/model/SoloRankHeader';

const mainStore = useMainStroe();
export default defineComponent({
  name: 'MainHome',
  setup() {
    const searchVal = ref('');
    const search = async () => {
      await mainStore.search(searchVal.value);
    };

    let soloRankHeader: ComputedRef<SoloRankHeader> = computed(() => {
      return mainStore.getSoloRankHeader();
    });

    let teamRankHeader: ComputedRef<TeamRankHeader> = computed(() => {
      return mainStore.getTeamRankHeader();
    });

    return { searchVal, search, soloRankHeader, teamRankHeader };
  },
});
</script>

<style scoped>
.center-logo {
  text-align: center;
}
.search_area {
  max-width: 800px;
}
.rk-content {
  display: flex;
}
</style>
