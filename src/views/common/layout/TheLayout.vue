<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed } from 'vue-demi';
import UserLayout from '@/views/common/layout/UserLayout.vue';
import {
  ComponentInternalInstance,
  defineComponent,
  getCurrentInstance,
} from '@vue/composition-api';
export default defineComponent({
  name: 'TheLayout',
  components: { UserLayout },
  setup() {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance;
    const router = proxy.$router;

    const layout = computed(() => {
      return router.currentRoute.meta?.layout || 'UserLayout';
    });

    return { layout, router };
  },
});
</script>
<style scoped>
main {
  height: 100%;
}
</style>
