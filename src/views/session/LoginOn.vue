<template>
  <v-container class="login_form">
    <v-row>
      <v-col md="12">
        <v-form ref="form">
          <v-text-field
            class="mb-2"
            outlined
            label="아이디"
            hide-details="auto"
          ></v-text-field>
          <v-text-field
            outlined
            label="비밀번호"
            type="password"
          ></v-text-field>
          <v-btn block color="success" x-large dark>로그인</v-btn>
          <div class="find_wrap">
            <router-link :to="{ name: '' }">아이디</router-link> |
            <router-link :to="{ name: '' }">아이디</router-link> |
            <router-link :to="{ name: '' }">아이디</router-link>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginOn',
  data() {
    let height = 'height: 924px';
    return { height };
  },
  methods: {},
};
</script>

<style lang="scss">
@import '@/assets/scss/login.scss';
</style>
