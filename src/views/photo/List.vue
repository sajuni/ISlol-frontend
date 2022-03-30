<template>
  <t-area>
    <template #title>사진</template>
    <template #text>사진첩입니다.</template>
    <template #content>
      <b-row>
        <b-card-group deck>
          <b-card v-for="item in imageList" :key="item.mediaSeq">
            <a href="#"
              ><b-card-img
                :src="item.mediaUrl"
                alt="Image"
                class="rounded-0"
              ></b-card-img
            ></a>
            <b-card-text
              >Some quick example text to build on the card and make up the bulk
              of the card's content.</b-card-text
            >
          </b-card>
        </b-card-group>
      </b-row>
    </template>
  </t-area>
</template>
<script>
import * as _ from 'lodash';
export default {
  data() {
    return {
      imageList: [],
    };
  },
  created() {
    this.imageList = this.makeList(this.$store.getters['media/getImageList']);
  },
  methods: {
    makeList(arg) {
      let list = _.cloneDeep(arg);
      list.forEach((v) => {
        v.mediaUrl = `${location.protocol}//${location.hostname}:${this.$portNum}/images/${v.mediaUrl}`;
      });
      return list;
    },
  },
};
</script>
