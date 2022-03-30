<template>
  <t-area>
    <template #title>공지사항</template>
    <template #text>공지사항을 작성</template>
    <template #content>
      <b-row>
        <b-col cols="8"
          ><b-input placeholder="제목" v-model="notice.title"
            >글제목</b-input
          ></b-col
        >
        <b-col></b-col>
        <b-col cols="1"
          ><input type="hidden" placeholder="작성자" />{{ writer }}</b-col
        >
      </b-row>
      <br />
      <ckeditor v-model="notice.content"></ckeditor>
      <b-button class="my-5" variant="primary" @click="save()">저장</b-button>
    </template>
  </t-area>
</template>

<script>
export default {
  data() {
    return {
      notice: {
        title: '',
        content: '',
      },
    };
  },
  methods: {
    save() {
      this.$store.dispatch('notice/save', this.notice).then(() => {
        let currentLength =
          this.$store.getters['notice/getNoticeListEndLength'];
        let pageable = {
          pageNum: 0,
          size: currentLength + 1,
        };
        this.$store.dispatch('notice/getList', pageable).then(() => {
          let savedSeq = this.$store.getters['notice/getSavedNoticeSeq'];
          this.$router.push({
            path: `/notice/detail/${savedSeq}`,
          });
        });
      });
    },
  },
  computed: {
    writer() {
      return this.$store.getters['auth/getUser'].nick;
    },
  },
};
</script>
