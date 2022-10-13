<template>
  <aside class="rank">
    <h1>{{ searchVal }}</h1>
    <div class="sr pt-5">
      <v-card class="sr-card" outlined>
        <div class="sr-header pl-4 py-2">솔로랭크</div>
        <v-divider> </v-divider>
        <div class="sr-content pl-5 py-3 d-flex">
          <img :src="soloRankHeader.img" />
          <div class="pt-3">
            <h3>{{ soloRankHeader.tier }}</h3>
            <div class="sr-lp">{{ soloRankHeader.lp }}</div>
          </div>
          <div class="sr-ratio pt-3 pl-16">
            {{ soloRankHeader.winLose }}<br />{{ soloRankHeader.ratio }}
          </div>
        </div>
      </v-card>
    </div>
    <div class="tr mt-5">
      <v-card class="tr-card" outlined>
        <div class="tr-header pl-4 py-1">자유랭크</div>
        <v-divider> </v-divider>
        <div class="tr-content pl-5 py-2 d-flex">
          <img :src="teamRankHeader.img" />
          <div class="pl-3">
            <h4>{{ teamRankHeader.tier }}</h4>
            <div class="tr-lp">{{ teamRankHeader.lp }}</div>
          </div>
          <div class="tr-ratio pl-16 ml-13">
            {{ teamRankHeader.winLose }}
            <br />
            {{ teamRankHeader.ratio }}
          </div>
        </div>
      </v-card>
    </div>
    <div class="mt-5">
      <v-card class="side-champion-box" outlined>
        <div
          class="champion-box d-flex my-2"
          v-for="item in ratioList"
          :key="item.name"
        >
          <div class="face"><img :src="item.img" /></div>
          <div class="infos pl-2">
            <div class="name">{{ item.name }}</div>
            <div class="kda">{{ item.cs }}</div>
          </div>
          <div class="kda-info">
            <div class="kda">{{ item.kda }}</div>
            <div class="detail">{{ item.detail }}</div>
          </div>
          <div class="played pr-3">
            <div class="ratio">{{ item.played }}</div>
            <div class="count">{{ item.count }}</div>
          </div>
        </div>
      </v-card>
    </div>
  </aside>
</template>

<script lang="ts">
import { Ratio } from '@/service/main/model/Ratio';
import { SoloRankHeader } from '@/service/main/model/SoloRankHeader';
import { TeamRankHeader } from '@/service/main/model/TeamRankHeader';
import { useMainStroe } from '@/service/main/moedules/main';
import { computed, ComputedRef, defineComponent } from '@vue/composition-api';
const mainStore = useMainStroe();

export default defineComponent({
  name: 'RatioHeader',
  props: ['searchVal'],
  setup() {
    const soloRankHeader: ComputedRef<SoloRankHeader> = computed(() => {
      return mainStore.getSoloRankHeader();
    });

    const teamRankHeader: ComputedRef<TeamRankHeader> = computed(() => {
      return mainStore.getTeamRankHeader();
    });

    const ratioList: ComputedRef<Array<Ratio>> = computed(() => {
      return mainStore.getRatioList();
    });

    return { soloRankHeader, teamRankHeader, ratioList };
  },
});
</script>

<style scoped>
.rank {
  width: 332px;
  display: inline-block;
}
.list-content {
  display: inline-block;
  vertical-align: top;
}
.sr-content {
  line-height: 25px;
}
.tr-content {
  line-height: 25px;
}
.sr-content img {
  max-width: 72px;
  max-height: 72px;
}
.tr-content img {
  max-width: 50px;
  max-height: 50px;
}
.sr-lp {
  font-size: 12px;
}
.tr-lp {
  font-size: 12px;
}
.sr-ratio {
  font-size: 12px;
}
.tr-ratio {
  font-size: 12px;
}
.sr-card {
  max-width: 330px;
}
.tr-card {
  max-width: 330px;
}
.side-champion-box {
  font-size: 12px;
}
.champion-box {
  height: 48px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #e3e3e3;
}
.face {
  width: 44px;
  text-align: right;
}

.face img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.infos {
  width: 100px;
}
.infos .name {
  font-weight: bolder;
}
.infos .kda {
  font-size: 11px;
  color: #9aa4af;
}
.kda-info {
  width: 100px;
  text-align: center;
}
.kda-info .kda {
  font-weight: 500;
}
.kda-info .detail {
  font-size: 11px;
  color: #9aa4af;
}
.played {
  width: 88px;
  text-align: right;
}
.played .ratio {
  font-weight: 500;
}
.played .count {
  font-size: 11px;
  color: #9aa4af;
}
</style>
