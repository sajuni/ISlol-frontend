<template>
    <t-area>
        <template #title>공지사항</template>
        <template #text>상세내용</template>
        <template #content>
            <section class="detail_area">
                <section class="title_info">
                    <section class="detail_title"><b>{{notice.title}}</b></section>
                    <section class="detail_date"><span>작성자: {{notice.member.memberNick}}</span>  <span>{{notice.createdDate}}</span></section>
                </section>
                <section class="detail_content" v-html="notice.content">
                    <!-- {{notice.content}} -->
                </section>
                <b-button class="detail_button" variant="primary" @click="goList()">목록</b-button>
                <b-button class="mx-3" v-if="role" @click="goUpdate(notice.noticeSeq)">수정</b-button>
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
        },
        goUpdate(noticeSeq) {
            this.$router.push({path: `/notice/update/${noticeSeq}`})
        }
    },
    created() {
        let noticeSeq = this.$router.currentRoute.params;
        this.notice = this.$store.getters['notice/getNoticeDetail'](noticeSeq);
    },
    computed: {
        role() {
            let role = false;
            if (this.$store.getters['auth/getUser'] != null) {
                if (this.$store.getters['auth/getUser'].roles == 'ROLE_ADMIN') {
                    role = true;
                }
            }
            return role;
        }
    }
}
</script>