<template>
  <header>
    <div class="lnb_menu">
      <div class="global_menu">
        <ul class="global_menu_list">
          <li class="global_menu_item px-4" id="first">
            <router-link :to="{ name: 'MemberInfo' }">회원정보</router-link>
          </li>
          <li class="global_menu_item px-4">
            <a href="javascript:void(0)" @click="logout()">로그아웃</a>
          </li>
          <li v-if="role" class="global_menu_item px-4" id="second">
            <router-link :to="{ name: 'Admin' }">관리자</router-link>
          </li>
        </ul>
      </div>
      <div class="location_menu">
        <b-navbar type="light" variant="white" class="h-25">
          <b-navbar-brand style="margin-right: auto">
            <router-link :to="{ name: 'Main' }">ISLOL</router-link>
          </b-navbar-brand>
          <b-navbar-nav>
            <!-- <b-nav-item class="px-4">
							<router-link :to="{ name: 'Main' }">Home</router-link>
						</b-nav-item> -->
            <b-nav-item class="px-4"> 대회영상 </b-nav-item>
            <b-nav-item class="px-4"> 명예의 전당 </b-nav-item>
            <b-nav-item-dropdown class="px-4" text="커뮤니티">
              <b-dropdown-item href="#"
                ><router-link :to="{ name: 'NoticeList' }"
                  >공지사항</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><router-link :to="{ name: 'PhotoList' }"
                  >사진</router-link
                ></b-dropdown-item
              >
            </b-nav-item-dropdown>
            <b-nav-item class="px-4"> 모임운영 현황 </b-nav-item>
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
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    },
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
    },
  },
};
</script>
