import pinia from '@/store';
import { defineStore } from 'pinia';
import { search } from '../api/main';
import { Ratio } from '../model/Ratio';
import { RatioList } from '../model/RatioList';
import { SoloRankHeader } from '../model/SoloRankHeader';
import { TeamRankHeader } from '../model/TeamRankHeader';

const cheerio = require('cheerio');

interface HistorySearchState {
  soloRankHeader: SoloRankHeader;
  teamRankHeader: TeamRankHeader;
  ratioInfo: RatioList;
}

const mainStore = defineStore({
  id: 'main',
  state: (): HistorySearchState => ({
    soloRankHeader: {
      text: '',
      tier: '',
      winLose: '',
      img: '',
      ratio: '',
      lp: '',
    },
    teamRankHeader: {
      text: '',
      tier: '',
      winLose: '',
      img: '',
      ratio: '',
      lp: '',
    },
    ratioInfo: {
      ratioList: [],
    },
  }),

  actions: {
    async search(searchVal: string): Promise<any> {
      try {
        const data = await search(searchVal);
        const $ = cheerio.load(data.data);
        const rankHeader = $('.e1x14w4w1');

        rankHeader.each((i: number, el: string) => {
          if (i == 0) {
            // 솔로랭크 헤더
            this.soloRankHeader.text = $(el).find('.header').text();
            const content = $(el).find('.content');
            this.soloRankHeader.img = content.find('img').attr('src');
            this.soloRankHeader.tier = content.find('.tier').text();
            this.soloRankHeader.lp = content.find('.lp').text();
            this.soloRankHeader.winLose = content.find('.win-lose').text();
            this.soloRankHeader.ratio = content.find('.ratio').text();
          } else {
            this.teamRankHeader.text = $(el).find('.header').text();
            const content = $(el).find('.content');
            this.teamRankHeader.img = content.find('img').attr('src');
            this.teamRankHeader.tier = content.find('.tier').text();
            this.teamRankHeader.lp = content.find('.lp').text();
            this.teamRankHeader.winLose = content.find('.win-lose').text();
            this.teamRankHeader.ratio = content.find('.ratio').text();
          }
        });

        const rankRatio = $('.e1g7spwk3 .champion-box');
        this.ratioInfo.ratioList = [];
        rankRatio.each((i: number, el: string) => {
          const ratio = {} as Ratio;
          ratio.img = $(el).find('.face img').attr('src');
          ratio.name = $(el).find('.name').text();
          ratio.cs = $(el).find('.cs').text();
          ratio.kda = $(el).find('.e1g7spwk1').text();
          ratio.detail = $(el).find('.detail').text();
          ratio.played = $(el).find('.e1g7spwk0').text();
          ratio.count = $(el).find('.count').text();
          this.ratioInfo.ratioList.push(ratio);
        });

        return data;
      } catch (err) {
        return Promise.reject(err);
      }
    },
    getSoloRankHeader(): SoloRankHeader {
      return this.soloRankHeader;
    },
    getTeamRankHeader(): TeamRankHeader {
      return this.teamRankHeader;
    },
    getRatioList(): Array<Ratio> {
      return this.ratioInfo.ratioList;
    },
  },
});

export function useMainStroe() {
  return mainStore(pinia);
}
