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
		<section class="main ls_media">
			<section class="media_content" v-if="this.videoList.length > 0">
				<b-embed
					v-for="item in this.videoList"
					:key="item.mediaSeq"
					:src="item.mediaUrl"
					type="iframe"
					allowfullscreen
				>
				</b-embed>
			</section>
			<section class="media_content" v-else>
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
			<section class="main ls_photo"><h4>포토</h4>
				<section class="ls_img"><b-img v-for="item in imageList" :key="item.mediaSeq" :src="item.mediaUrl"></b-img></section>
			</section>
			<section class="main ls_notice">
				<section>
					<h4>공지사항</h4><br>
					<b-table
						:items="noticeList"
						:fields="noticeHeader"
						:style="'text-align: center;'"
						:per-page="5"
						hover
					>
					<template #cell(content)="data">
						<router-link :to="{ path: `/notice/detail/${data.item.noticeSeq}`}" @click.native="test()">{{data.item.content}}</router-link>
					</template>
					</b-table>
				</section>
			</section>
		</section>
	</body>
</template>

<script>
import * as _ from 'lodash'
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
			imageList: [],
			width: 0,
            height: 0
		}
	},
	created() {
		this.getInitData();
	},
    mounted() {
		let height = document.body.scrollHeight;
		let cssStyle = document.createElement("style");
		cssStyle.innerHTML=`body{height:${height}px}`
		document.head.appendChild(cssStyle);
    },
	beforeDestroy() {
		let cssStyle = document.createElement("style");
		cssStyle.innerHTML=`body{height:100%}`
		document.head.appendChild(cssStyle);
		console.log('beforeDestroy...')
	},
	methods: {
		getInitData() {
			this.$store.dispatch("notice/stateClear");
			this.getNoticeList();
			this.getMediaList();
			this.locateMe();
		},
		getNoticeList() {
			let pageable = {
				pageNum: this.pageNum,
				itemPerPage: this.itemPerPage
			}
			this.$store.dispatch("notice/getList", pageable).then(() => {
				this.noticeList = this.$store.getters["notice/getNoticeList"];
			})
		},
		getMediaList() {
			this.$store.dispatch("media/getList").then(() => {
				// this.videoList = this.$store.getters["media/getVideoList"];
				// this.imageList = this.$store.getters["media/getImageList"];
				this.videoList = this.makeRankList(this.$store.getters["media/getVideoList"]);
				this.imageList = this.makeRankList(this.$store.getters["media/getImageList"]);
			})
		},
		makeRankList(arg) {
			let list = _.cloneDeep(arg);
			let sortList = [];
			if (list.length != 0) {
				for (const index in list) {
					let makeList = list[index];
					if (makeList.sort) {
						sortList.push(makeList);
					}
					if (sortList.length == 3) {
						for (const idx in sortList) {
							let sList = sortList[idx];
							sList.mediaUrl = `${location.protocol}//${location.hostname}:${this.$portNum}/images/${sList.mediaUrl}`
						}
						return sortList;
					}
				}
				return sortList;
			}
		},
		async getLocationData() {
			return new Promise((res, rej) => {
				navigator.geolocation.getCurrentPosition(pos => {
					res(pos);
				}, err => {
					rej(err);
				});
			});
		},
		async locateMe() {
			let locationData = await this.getLocationData();
			let location = {
				x: '',
				y: ''
			}
			location.x = locationData.coords.longitude;
			location.y = locationData.coords.latitude;

			this.$store.dispatch("kakao/getData", location)
		},
		test() {
			window.scrollTo(0, 0);
		}
	},
}
</script>