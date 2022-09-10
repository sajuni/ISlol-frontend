<template>
  <div class="container">
    <aside class="rank">
      <div class="soloRankHeader">
        <div class="header">솔로랭크</div>
        <div class="content">
          <img :src="soloRankHeader.img" />
          {{ soloRankHeader.tier }}
          {{ soloRankHeader.lp }}
          {{ soloRankHeader.winLose }}
          {{ soloRankHeader.ratio }}
        </div>
      </div>
      <div class="teamRankHeader">
        <div class="header">자유랭크</div>
        <div class="content">
          <img :src="teamRankHeader.img" />
          {{ teamRankHeader.tier }}
          {{ teamRankHeader.lp }}
          {{ teamRankHeader.winLose }}
          {{ teamRankHeader.ratio }}
        </div>
      </div>
    </aside>
    <article>
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

<style scoped></style>
