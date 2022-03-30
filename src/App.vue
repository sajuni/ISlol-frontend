<template>
  <div id="app">
    <the-layout>
      <router-view />
    </the-layout>
    <notifications
      group="loggedIn"
      position="top right"
      animation-type="velocity"
    />
  </div>
</template>

<script>
import TheLayout from '@/views/layouts/TheLayout.vue';

export default {
  components: { TheLayout },
};
</script>
