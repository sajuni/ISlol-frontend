<template>
  <div id="app">
    <Header />
    <router-view />
    <notifications 
      group="loggedIn" 
      position="top right"
      animation-type="velocity"
    />
    <Footer />
  </div>
</template>

<script>
import Header from '@/views/common/Header.vue'
import Footer from '@/views/common/Footer.vue'
export default {
  components: {
     Header,  Footer
  },
}
</script>

<style>
html,body{padding:0; margin:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0; padding:0;
}
</style>
