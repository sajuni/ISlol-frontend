import pinia from '@/store';
import { defineStore } from 'pinia';
import { search } from '../api/main';
import { Ratio } from '../model/Ratio';
import { RatioList } from '../model/RatioList';
import { RatioMain } from '../model/RatioMain';
import { RatioMainList } from '../model/RatioMainList';
import { SoloRankHeader } from '../model/SoloRankHeader';
import { TeamRankHeader } from '../model/TeamRankHeader';

const cheerio = require('cheerio');

interface HistorySearchState {
  soloRankHeader: SoloRankHeader;
  teamRankHeader: TeamRankHeader;
  ratioList: RatioList;
  ratioMainList: RatioMainList;
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
    ratioList: {
      ratioInfo: [],
    },
    ratioMainList: {
      ratioMainListInfo: [],
    },
  }),

  actions: {
    async search(searchVal: string, flag?: boolean): Promise<any> {
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
        this.ratioList.ratioInfo = [];
        rankRatio.each((i: number, el: string) => {
          const ratio = {} as Ratio;
          const e = $(el);
          ratio.img = e.find('.face img').attr('src');
          ratio.name = e.find('.name').text();
          ratio.cs = e.find('.cs').text();
          ratio.kda = e.find('.e1g7spwk1').text();
          ratio.detail = e.find('.detail').text();
          ratio.played = e.find('.e1g7spwk0').text();
          ratio.count = e.find('.count').text();
          this.ratioList.ratioInfo.push(ratio);
        });

        const ratioList = $('.e1r5v5160 .e1iiyghw3');
        this.ratioMainList.ratioMainListInfo = [];
        ratioList.each((i: number, el: string) => {
          const ratio = {} as RatioMain;
          const e = $(el);
          ratio.type = e.find('.type').text();
          ratio.timeStamp = e.find('.time-stamp').text();
          ratio.result = e.find('.result').text();
          ratio.length = e.find('.length').text();
          ratio.championImg = e.find('.icon img').attr('src');
          const spells = e.find('.spell img');
          const spellArray: string[] = [];
          spells.each((i: number, el: any) => {
            spellArray.push(el.attribs.src);
          });
          ratio.spells = spellArray;
          const runes = e.find('.rune img');
          const runeArray: string[] = [];
          runes.each((i: number, el: any) => {
            runeArray.push(el.attribs.src);
          });
          ratio.runes = runeArray;
          ratio.kda = e.find('.k-d-a').text();
          ratio.ratio = e.find('.ratio').text();
          this.ratioMainList.ratioMainListInfo.push(ratio);

          const items = e.find('.items li img');
          const itemArray: string[] = new Array(6);
          items.each((i: number, el: any) => {
            itemArray[i] = el.attribs.src;
            //itemArray.push(el.attribs.src);
          });
          ratio.items = itemArray;
          ratio.ward = e.find('.items .ward img').attr('src');
          ratio.multiKill = e.find('.multi-kill').text();
          ratio.badge = e.find('.badge').text();
          ratio.pKill = e.find('.p-kill').text();
          ratio.controllWard = e.find('.stats .ward').text();
          ratio.cs = e.find('.cs').text();
          ratio.averageTier = e.find('.average-tier').text();

          const participants = e.find('.e1iiyghw1');
          const playerArray: Object[] = [];
          participants.each((i: number, el: any) => {
            const player: any = {};
            player.img = el.children[0].children[0].attribs.src;
            player.name = el.children[1].children[0].children[0].data;
            playerArray.push(player);
          });

          ratio.participants = playerArray;
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
      return this.ratioList.ratioInfo;
    },
    getRatioMainList(): Array<RatioMain> {
      return this.ratioMainList.ratioMainListInfo;
    },
  },
});

export function useMainStroe() {
  return mainStore(pinia);
}
