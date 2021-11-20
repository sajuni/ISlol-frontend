<template>
  <div id="app">
    <the-layout>
      <router-view />
      <notifications 
        group="loggedIn" 
        position="top right"
        animation-type="velocity"
      />
    </the-layout>
  </div>
</template>

<script>
import TheLayout from '@/views/layouts/TheLayout.vue'

export default {
  components: { TheLayout }
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
dl, ol, ul {
  list-style: none;
  padding: 0;
}
a:hover { color: black !important}
</style>
