<template>
	<header>
		<div class="lnb_menu">
			<div class="global_menu">
				<ul class="global_menu_list">
					<li class="global_menu_item px-4" id="two"><a href="#">회원정보</a></li>
					<li class="global_menu_item px-4"><a href="#" @click="logout()">로그아웃</a></li>
				</ul>
			</div>
			<div class="location_menu">
				<b-navbar type="light" variant="white" class="h-25">
					<b-navbar-brand href="" style="margin-right:auto">
						ISLOL
					</b-navbar-brand>
					<b-navbar-nav>
						<b-nav-item class="px-4">
							<router-link :to="{ name: 'Main' }">Home</router-link>
						</b-nav-item>
						<b-nav-item class="px-4">
							대회영상
						</b-nav-item>
						<b-nav-item class="px-4">
							명예의 전당
						</b-nav-item>
						<b-nav-item-dropdown class="px-4" text="커뮤니티">
							<b-dropdown-item href="#"><router-link :to="{ name: 'NoticeList' }">공지사항</router-link></b-dropdown-item>
							<b-dropdown-item href="#">ISLOL Photo</b-dropdown-item>
						</b-nav-item-dropdown>
						<b-nav-item class="px-4">
							모임운영 현황
						</b-nav-item>
					</b-navbar-nav>
					<!-- <b-navbar-nav>
						<b-nav-item-dropdown class="mx-auto" text="사용자정보">
							<b-dropdown-item href="#">회원정보</b-dropdown-item>
							<b-dropdown-item href="#">회원정보</b-dropdown-item>
							<b-dropdown-item @click="logout()">로그아웃</b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav> -->
				</b-navbar>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
        return {
           
        }
    },
// 	mounted() {
// 		console.log(this.$router)
// 	},
	methods: {
		logout() {
			this.$store.dispatch('auth/logout');
		}
	},
}
</script>

<style scoped>
header {width:100%; text-align:center; position:relative; border-bottom:1px solid #35495e; text-align: -webkit-center;}
a {text-decoration:none; color:#7a7a7a;}
.global_menu {height: 39px; padding-top: 13px;}
.lnb_menu {width: 1120px;}
.global_menu_list {font-size: 12px; margin:0;}
.global_menu_item {float:right;}
#two {border-left:1px solid #e5e5e5;}
</style>