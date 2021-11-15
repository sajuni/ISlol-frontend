<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import DefaultLayout from '@/views/layouts/DefaultLayout.vue';

export default {
  name: 'TheLayout',
  components: { DefaultLayout },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || 'DefaultLayout';
      console.log('메타레이아웃: ',this.$route.meta.layout);
      return layout;
    }
  }
}
</script>