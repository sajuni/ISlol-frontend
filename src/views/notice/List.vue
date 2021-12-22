<template>
    <div>
        <div class="title_wrap">
            <h1 class="title">공지사항</h1>
            <p class="text"><b>공지사항 입니다.</b></p>
        </div>
        <div class="table">
            <b-table 
                :items="notieList"
                :fields="noticeHeader" 
                bordered
                hover
                >
                <template v-slot:cell(content)="data">
                    <a href="#" @click="goDetail(data.item.noticeSeq)">{{data.item.content}}</a>
                </template>
            </b-table>
        </div>
        <div class="pagiNation">
            <b-pagination
                align="center"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
            ></b-pagination>
        </div>
    </div>
</template>
<style>
.title_wrap { margin: 100px; }
.title 
{ 
    font-size: 56px; 
    font-weight: 900;
}
.text { margin: 60px; }
.table 
{ 
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
}
.pagiNation {
    margin: 50px 0 100px 0;
}
</style>
<script>
export default {
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            noticeHeader: [
                { noticeSeq: "번호" }, 
                { content: "제목" }, 
                { regDate: "등록일" }
            ],
            notieList: [],
        }
    },
    mounted() {
        this.notieList = this.$store.getters['notice/getNoticeList'];
    },
    methods: {
        goDetail(val) {
            console.log(val);
        }
    },
    computed: {
        rows() {
            return this.notieList.length;
        }
    }
}
</script>