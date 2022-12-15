<template>
  <div>
    <MainHeader />
    <slot />
    <MainFooter />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MainHeader from '@/views/common/MainHeader.vue';
import MainFooter from '@/views/common/MainFooter.vue';

export default defineComponent({
  name: 'UserLayout',
  components: { MainHeader, MainFooter },
  setup() {},
});
</script>
