<template>
    <div>
        <div class="title_wrap">
            <h1 class="title">공지사항</h1>
            <p class="text"><b>공지사항 입니다.</b></p>
        </div>
        <div class="content">
            <b-table 
                :items="paginatedData"
                :fields="noticeHeader" 
                bordered
                hover
                >
                <template v-slot:cell(content)="data">
                    <a href="#" @click="goDetail(data.item.noticeSeq)">{{data.item.content}}</a>
                </template>
            </b-table>
        </div>
        <div class="page_nation">
            <b-pagination
                align="center"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
                @page-click="pageClick"
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
.content 
{ 
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    text-align: -webkit-center;
}
.page_nation {
    margin: 50px 0 100px 0;
}
</style>
<script>
export default {
    data() {
        return {
            perPage: 10,
            currentPage: 1,
            noticeHeader: [
                { noticeSeq: "번호" }, 
                { content: "제목" }, 
                { regDate: "등록일" }
            ],
            noticeFullList: [],
            notieList: [],
            pageSize: 10,
            pageNum: 0,
            itemPerPage: 100,
        }
    },
    mounted() {
        this.noticeFullList = this.$store.getters['notice/getNoticeList'];
    },
    methods: {
        goDetail(val) {
        },
        pageClick(button, page) {
            this.pageNum = page - 1;

            if (page > this.pageCount()-2) {
                this.itemPerPage += 100;
                let pageable = {
                    pageNum: this.noticeFullList.length,
                    itemPerPage: this.itemPerPage
                }
                this.$store.dispatch("notice/getList", pageable)
            }

        },
        pageCount() {
            let listLeng = this.noticeFullList.length;
            let listSize = this.pageSize;
            let page = Math.floor(listLeng / listSize);
            return page;
        }
    },
    computed: {
        rows() {
            return this.$store.getters['notice/getNoticeListEndLength'];
        },
        // pageCount() {
            // let listLeng = this.noticeFullList.length;
            // let listSize = this.pageSize;
            // let page = Math.floor(listLeng / listSize);
            // this.cuerrentMaxPage();
            // console.log(page);
            // if (listLeng % listSize > 0) page += 1;
            // return page;
        // },
        paginatedData() {
            const start = this.pageNum * this.pageSize,
                  end = start + this.pageSize;
            return this.noticeFullList.slice(start, end);      
        }        
    }
}
</script>