<template>
    <t-area>
        <template #title>공지사항</template>
        <template #text>수정</template>
        <template #content>
            <section class="detail_area">
                <section class="title_info">
                    <section class="detail_title"><b-input placeholder="제목" v-model="notice.title">글제목</b-input></section>
                    <section class="detail_date"><span>작성자: {{notice.member.memberNick}}</span>  <span>{{notice.createdDate}}</span></section>
                </section>
                <section class="update_content">
                    <ckeditor v-model="notice.content"></ckeditor>
                </section>
                <section class="btn_area mt-5">
                    <b-button class="detail_button" variant="primary" @click="goList()">목록</b-button>
                    <b-button class="mx-3" @click="update()">수정하기</b-button>
                </section>
            </section>
        </template>
    </t-area>
</template>

<script>
export default {
    data() {
        return {
            notice: {}
        }
    },
    created() {
        let noticeSeq = this.$router.currentRoute.params;
        this.notice = this.$store.getters['notice/getNoticeDetail'](noticeSeq);
    },
    methods: {
        goList() {
            this.$router.push({name: 'NoticeList', params: { page : this.$store.getters['notice/getCurrentPage'] }});
        },
        update() {
            delete this.notice.createdDate
            this.$store.dispatch("notice/save", this.notice)
            console.log(this.notice)
        }
    }
}

</script>