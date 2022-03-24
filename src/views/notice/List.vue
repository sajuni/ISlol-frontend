<template>
    <div>
        <t-area>
            <template #title>공지사항</template>
            <template #text>공지사항 목록</template>
            <template #content>
                <b-table 
                    :items="paginatedData"
                    :fields="noticeHeader" 
                    :style="'text-align: center;'"
                    hover
                    >
                    <template v-slot:cell(content)="data">
                        <a href="javascript:void(0)" @click="goDetail(data)">{{data.item.title}}</a>
                    </template>
                    <template #table-colgroup>
                        <col :style="{ width: '5%' }">
                        <col :style="{ width: '70%' }">
                        <col :style="{ width: '12%' }">
                        <col :style="{ width: '13%' }">
                     </template>
                </b-table>
                <b-button id="save_button" variant="primary" @click="goSave()">글쓰기</b-button>
            </template>
        </t-area>
        <div class="page_nation">
            <b-pagination
                align="center"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="pageSize"
                aria-controls="my-table"
                @page-click="pageClick"
            ></b-pagination>
        </div>
    </div>
</template>
<script>
export default {
    props: {
      page: {
        type: Number,
        default: 1
      }
    },
    data() {
        return {
            // perPage: 10,
            noticeHeader: [
                { noticeSeq: "번호" }, 
                { content: "제목" }, 
                { createdDate: "등록일" },
                { 
                    key: "member.memberNick",
                    label: '작성자',
                }
            ],
            notieList: [],
            currentPage: 1,
            pageNum: 0,
            pageSize: 10,
            size: 100,
        }
    },
    mounted() {
        // 페이지 유지를 위한 초기화
        this.currentPage = this.page;
        this.notieList = this.$store.getters['notice/getNoticeList'];
    },
    methods: {
        goDetail(data) {
            this.$store.commit('notice/setCurrentPage', this.currentPage);
            this.$router.push( { path: `/notice/detail/${data.item.noticeSeq}`} )
        },
        pageClick(button, page) {
            this.currentPage = page;
            let maxListLeng = this.$store.getters['notice/getNoticeListEndLength'];
            let maxBtn = button.target.getAttribute('aria-label');
            let maxflag = 'Go to last page';
            
            // 리스트 갯수가 더이상 안 받아와도 될 때
            if (maxListLeng == this.notieList.length) return;
            
            // 마지막페이지 가기 누를 경우
            if (maxBtn == maxflag) {
                this.maxPageClick();
                return;
            }

            // 불러온 페이지 중 -2번째 페이지를 눌럿을 때 실행 더 받아올 페이지 있으면 받아옴 
            if (page > this.pageCount()-2) {
                if (this.pageCount() > this.pageNum*10) {
                    this.pageNum++;
                    let pageable = {
                        pageNum: this.pageNum,
                        size: this.size
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
                size: maxListLeng
            }
            this.$store.dispatch("notice/getList", pageable);

            return;
        },
        pageCount() {
            let listLeng = this.notieList.length;
            let listSize = this.pageSize;
            let page = Math.floor(listLeng / listSize);
            return page;
        },
        goSave() {
            this.$store.commit('notice/setCurrentPage', this.currentPage);
            this.$router.push( {name: "NoticeSave"} );
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