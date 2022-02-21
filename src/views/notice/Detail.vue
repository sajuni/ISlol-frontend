<template>
    <t-area>
        <template #title>공지사항</template>
        <template #text>상세내용</template>
        <template #content>
            <section class="detail_area">
                <section class="title_info">
                    <section class="detail_title"><b>{{notice.title}}</b></section>
                    <section class="detail_date"><span>{{notice.member.memberName}}</span>  <span>{{notice.createdDate}}</span></section>
                </section>
                <section class="detail_content">
                    {{notice.content}}
                </section>
                <b-button class="detail_button" variant="primary" @click="goList()">목록</b-button>
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
    methods: {
        goList() {
            // 페이지 유지를 위해 props로 페이지 전달
            this.$router.push({name: 'NoticeList', params: { page : this.$store.getters['notice/getCurrentPage'] }});
        }
    },
    created() {
        let noticeSeq = this.$router.currentRoute.params;
        this.notice = this.$store.getters['notice/getNoticeDetail'](noticeSeq);
    }
}
</script>