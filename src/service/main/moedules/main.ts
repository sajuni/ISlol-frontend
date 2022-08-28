import pinia from '@/store';
import { defineStore } from 'pinia';
import { search } from '../api/main';

const cheerio = require('cheerio');

const mainStore = defineStore({
  id: 'main',
  actions: {
    async search(searchVal: string): Promise<any> {
      try {
        const data = await search(searchVal);
        const $ = cheerio.load(data.data);
        console.log($());
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
