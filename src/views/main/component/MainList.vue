<template>
  <div class="main-list ml-2">
    <!-- <li
      v-for="(item, index) in ratioList"
      :key="index"
      :class="item.result == '패배' ? 'lose-li mb-2' : 'win-li mb-2'"
    >
      <div
        :class="
          item.result == '패배'
            ? 'LOSE py-2 pl-3 d-flex'
            : 'WIN py-2 pl-3 d-flex'
        "
      >
        <div class="game">
          <div class="type">
            {{ item.type }}
          </div>
          <div class="time-stamp">
            {{ item.timeStamp }}
          </div>
          <div class="bar"></div>
          <div class="result">
            {{ item.result }}
          </div>
          <div class="length">
            {{ item.length }}
          </div>
        </div>
        <div class="list-info">
          <div class="d-flex">
            <div class="champion d-flex">
              <div class="icon">
                <img :src="item.championImg" alt="" />
              </div>
              <div class="spells ml-1">
                <div class="spell"><img :src="item.spells[0]" alt="" /></div>
                <div class="spell"><img :src="item.spells[1]" alt="" /></div>
              </div>
              <div class="runes ml-1">
                <div class="rune"><img :src="item.runes[0]" alt="" /></div>
                <div class="rune"><img :src="item.runes[1]" alt="" /></div>
              </div>
            </div>
            <div class="kda">
              <div class="k-d-a">{{ item.kda }}</div>
              <div class="ratio">{{ item.ratio }}</div>
            </div>
            <div class="stats">
              <div class="p-kill">{{ item.pKill }}</div>
              <div class="c-ward">{{ item.controllWard }}</div>
              <div class="cs">{{ item.cs }}</div>
              <div class="average-tier">{{ item.averageTier }}</div>
            </div>
          </div>
          <div>
            <div class="items d-flex">
              <ul class="d-flex pl-0">
                <li v-for="(img, idx) in item.items" :key="idx">
                  <img :src="img" alt="" />
                </li>
              </ul>
              <div class="ward"><img :src="item.ward" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </li> -->
  </div>
</template>

<script lang="ts">
// import { RatioMain } from '@/service/main/model/RatioMain';
// import { useMainStroe } from '@/service/main/moedules/main';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // const ratioList: ComputedRef<Array<RatioMain>> = computed(() => {
    //   return mainStore.getRatioMainList();
    // });
    return {
      // ratioList,
    };
  },
});
</script>
<style scoped>
li {
  list-style: none;
  color: #758592;
}
.LOSE {
  background-color: #fff1f3;
}
.WIN {
  background-color: #ecf2ff;
}
.lose-li {
  border-radius: 4px;
  border-left-width: 6px;
  border-left-style: solid;
  border-color: #e84057;
}
.win-li {
  border-radius: 4px;
  border-left-width: 6px;
  border-left-style: solid;
  border-color: #5383e8;
}
.main-list {
  font-size: 12px;
}
.LOSE .bar {
  width: 48px;
  height: 1px;
  margin: 8px 0px 4px;
  background-color: #ffd8d9;
}
.WIN .bar {
  width: 48px;
  height: 1px;
  margin: 8px 0px 4px;
  background-color: #d5e3ff;
}
.LOSE .type {
  font-weight: bold;
  color: #d31a45;
}
.WIN .type {
  font-weight: bold;
  color: #4171d6;
}
.LOSE .result {
  font-weight: bold;
}
.WIN .result {
  font-weight: bold;
}
.champion {
  align-items: center;
}
.game {
  width: 108px;
}
.icon img {
  border-radius: 50%;
}
img {
  width: 48px;
  height: 48px;
}
.spell img {
  width: 22px;
  height: 22px;
}
.rune img {
  width: 22px;
  height: 22px;
}
.kda {
  width: 107px;
  padding-right: 12px;
  margin-right: 8px;
  margin-left: 12px;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
}
.k-d-a {
  font-size: 15px;
}
.stats {
  font-size: 11px;
  width: 140px;
}
.p-kill {
  color: #d31a45;
}
.average-tier {
  font-weight: bold;
}
.items li img {
  width: 22px;
  height: 22px;
  border-radius: 4px;
}
.items li {
  margin-left: 2px;
}
.LOSE li {
  height: 22px;
  background-color: #ffbac3;
}
.WIN li {
  height: 22px;
  background-color: #b3cdff;
}
.ward img {
  width: 22px;
  height: 22px;
  border-radius: 11px;
  margin-left: 2px;
}
</style>
