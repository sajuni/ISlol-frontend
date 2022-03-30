<template>
  <a-area title="미디어관리" subTitle="사진 / 동영상 관리">
    <template #content>
      <b-tabs content-class="mt-3">
        <b-tab title="이미지" active>
          <b-table :items="imageList" :fields="imageHeader">
            <template #table-colgroup>
              <col :style="{ width: '15%' }" />
              <col :style="{ width: '25%' }" />
              <col :style="{ width: '35%' }" />
              <col :style="{ width: '15%' }" />
              <col :style="{ width: '5%' }" />
            </template>
          </b-table>
        </b-tab>
        <b-tab title="영상"><p>I'm the second tab</p></b-tab>
      </b-tabs>
    </template>
  </a-area>
</template>

<script>
export default {
  data() {
    return {
      imageList: [],
      imageHeader: [
        { mediaSeq: '번호' },
        { name: '이름' },
        { dscrp: '설명' },
        {
          key: 'member.memberName',
          label: '작성자',
        },
        { useYn: '게시여부' },
      ],
    };
  },
  created() {
    this.imageList = this.$store.getters['media/getimageList'];
  },
};
</script>
