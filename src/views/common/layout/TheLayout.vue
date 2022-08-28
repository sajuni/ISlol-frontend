<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import { computed } from 'vue-demi';
import UserLayout from '@/views/common/layout/UserLayout.vue';
export default {
  name: 'TheLayout',
  components: { UserLayout },
  setup(props, { root }) {
    const layout = computed(() => {
      return root.$route.meta.layout || 'UserLayout';
    });

    return { layout };
  },
};
</script>
