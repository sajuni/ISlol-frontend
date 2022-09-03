import pinia from '@/store';
import { defineStore } from 'pinia';
import { search } from '../api/main';
import { SoloRankHeader } from '../model/SoloRankHeader';

const cheerio = require('cheerio');

interface HistorySearchState {
  soloRankHeader: SoloRankHeader;
}

const mainStore = defineStore({
  id: 'main',
  state: (): HistorySearchState => ({
    soloRankHeader: {
      text: '',
      class: '',
      history: '',
      img: '',
      rate: '',
      score: '',
    },
  }),

  actions: {
    async search(searchVal: string): Promise<any> {
      try {
        const data = await search(searchVal);
        const $ = cheerio.load(data.data);
        debugger;
        const rankHeader = $('.e1x14w4w1');
        rankHeader.each((i: number, el: string) => {
          if (i == 0) {
            // 솔로랭크 헤더
            this.soloRankHeader.text = $(el).find('.header').text();
            console.log(this.soloRankHeader.text);
            this.soloRankHeader.img = $(el).find('.content img').attr('href');
          }
        });
        return data;
      } catch (err) {
        return Promise.reject(err);
      }
    },
  },
});

export function useMainStroe() {
  return mainStore(pinia);
}
