<template>
	<body>
        <section class="main ls_swift">
			<b-carousel
			 	id="carousel-fade"
				style="text-shadow: 0px 0px 2px #000"
				fade
				indicators
				img-width="1024"
				img-height="480"
			>
     			<b-carousel-slide
					caption="First slide"
					img-src="https://www.hyundai.com/contents/mainbanner/2022-main-w.jpg"
				></b-carousel-slide>
				<b-carousel-slide 
					caption="Two slide"
					img-src="https://www.hyundai.com/contents/mainbanner/santafe_22my-main-w.jpg">
				</b-carousel-slide>
				<b-carousel-slide 
					caption="Three slide"
					img-src="https://www.hyundai.com/contents/mainbanner/2022-main-w.jpg">
				</b-carousel-slide>
  			</b-carousel>
		</section>
		<section class="main ls_video">
			<section class="video_content" v-if="this.videoList.length > 0">
				<b-embed
					v-for="item in this.videoList"
					:key="item.videoSeq"
					:src="item.videoUrl"
					type="iframe"
					allowfullscreen
				>
				</b-embed>
			</section>
			<section class="video_content" v-else>
				<b-embed
					type="iframe"
					src="https://www.youtube.com/embed/MBh5kirOkCU"
					allowfullscreen
				>
				</b-embed>
				<b-embed
					type="iframe"
					src="https://www.youtube.com/embed/MBh5kirOkCU"
					allowfullscreen
				>
				</b-embed>
				<b-embed
					type="iframe"
					src="https://www.youtube.com/embed/MBh5kirOkCU"
					allowfullscreen
				>
				</b-embed>
			</section>
		</section>
		<section class="main ls_board">
			<section class="main ls_photo">포토</section>
			<section class="main ls_notice">
				<section>
					<h4>공지사항입니다.</h4><br>
					<b-table
						:items="noticeList"
						:fields="noticeHeader"
						:style="'text-align: center;'"
						:per-page="5"
						hover
					>
					<template #cell(content)="data">
						<router-link :to="{ path: `/notice/detail/${data.noticeSeq}` }">{{data.item.content}}</router-link>
					</template>
					</b-table>
				</section>
			</section>
		</section>
	</body>
</template>

<script>
export default {
	data() {
		return {
			pageNum: 0,
			itemPerPage: 100,
			noticeList: [],
			noticeHeader: [
                { noticeSeq: "번호" }, 
                { content: "제목" }, 
                { createdDate: "등록일" },
                { 
                    key: "member.memberName",
                    label: '작성자',
                }
            ],
			videoList: [],
		}
	},
	created() {
		console.log('연동확인')
		this.$store.dispatch("notice/stateClear");
		let pageable = {
			pageNum: this.pageNum,
			itemPerPage: this.itemPerPage
		}
		this.$store.dispatch("notice/getList", pageable).then(() => {
			this.noticeList = this.$store.getters["notice/getNoticeList"];
		})

		this.$store.dispatch("video/getList").then(() => {
			this.videoList = this.$store.getters["video/getVideoList"];
		}).then();
	},
	methods: {
		
	},
}
</script>