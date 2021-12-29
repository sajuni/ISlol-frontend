<template>
    <div>
        <t-area>
            <template v-slot:title>공지사항</template>
            <template v-slot:text>공지사항 입니다.</template>
            <template v-slot:content>
                <b-table 
                    :items="paginatedData"
                    :fields="noticeHeader" 
                    bordered
                    hover
                    >
                    <template v-slot:cell(content)="data">
                        <a href="javascript:void(0)" @click="goDetail(data.item.noticeSeq)">{{data.item.content}}</a>
                    </template>
                </b-table>
            </template>
        </t-area>
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
            notieList: [],
            pageSize: 10,
            pageNum: 0,
            itemPerPage: 100,
        }
    },
    mounted() {
        this.notieList = this.$store.getters['notice/getNoticeList'];
        if (!this.notieList.length) {
            let pageable = {
                pageNum: this.pageNum,
                itemPerPage: this.itemPerPage
            }
            this.$store.dispatch("notice/getList", pageable).then(() => {
                this.notieList = this.$store.getters['notice/getNoticeList'];
            })
        }
    },
    methods: {
        goDetail(data) {
            this.$router.push( { name: "Detail", query: { id: data }} )
        },
        pageClick(button, page) {
            this.currentPage = page;
            let maxBtn = button.target.getAttribute('aria-label');
            let maxflag = 'Go to last page';
            if (maxBtn == maxflag) {
                this.maxPageClick();
                return;
            }
            if (page > this.pageCount()-2) {
                if (this.pageCount() > this.pageNum*10) {
                    this.pageNum++;
                    let pageable = {
                        pageNum: this.pageNum,
                        itemPerPage: this.itemPerPage
                    }
                    this.$store.dispatch("notice/getList", pageable);
                }
            }
        },
        maxPageClick() {
            let maxListLeng = this.$store.getters['notice/getNoticeListEndLength'];
            this.pageNum = 3;
            let pageable = {
                pageNum: 0,
                itemPerPage: maxListLeng
            }
            this.$store.dispatch("notice/getList", pageable);

            return;
        },
        pageCount() {
            let listLeng = this.notieList.length;
            let listSize = this.pageSize;
            let page = Math.floor(listLeng / listSize);
            return page;
        }
    },
    computed: {
        rows() {
            return this.$store.getters['notice/getNoticeListEndLength'];
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.pageSize,
                  end = start + this.pageSize;
            return this.notieList.slice(start, end);      
        }        
    }
}
</script>