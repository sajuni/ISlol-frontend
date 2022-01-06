<template>
    <div>
        <t-area>
            <template #title>공지사항</template>
            <template #text>상세내용</template>
            <template #content>
                <section class="detail_area">
                    <section class="title_info">
                        <section class="detail_title">공지사항 제목 입니다.</section>
                        <section class="detail_date">2111/11/11 12:12</section>
                    </section>
                    <section class="detail_content">
                    ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                    </section>
                    <b-button class="detail_button" variant="primary" @click="goList()">목록</b-button>
                </section>
            </template>
        </t-area>
    </div>
</template>

<script>
export default {
    methods: {
        goList() {
            // 페이지 유지를 위해 props로 페이지 전달
            this.$router.push({name: 'NoticeList', params: { page : this.$store.getters['notice/getCurrentPage'] }});
        }
    },
}
</script>