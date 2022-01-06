<template>
	<body>
        <div class="main ls_swift">
			스와이프
		</div>
		<div class="main ls_video">
            영상
		</div>
		<div class="main ls_board">
			<div class="main ls_photo">포토</div>
			<div class="main ls_notice">공지</div>
		</div>
	</body>
</template>

<style>
.ls_swift { height: 500px; background-color: lightgray;}
.ls_video { height: 400px; border: 1px solid red;}
.ls_board { height: 400px;}
.ls_photo { border: 1px solid red;
            float: left;
            height: 100%;
            width:60%;
            box-sizing: border-box;}
.ls_notice { border: 1px solid red;
           	 float: left;
             height: 100%;
           	 width:40%;
           	 box-sizing: border-box;}
</style>

<script>
export default {
	data() {
		return {
			pageNum: 0,
			itemPerPage: 100,
			noticeList: {}
		}
	},
	methods: {
		
	},
	mounted() {
		this.$store.dispatch("notice/stateClear");
		let pageable = {
			pageNum: this.pageNum,
			itemPerPage: this.itemPerPage
		}
		this.$store.dispatch("notice/getList", pageable).then(() => {
			this.noticeList = this.$store.state.notice.noticeList;
		})
	}
}
</script>