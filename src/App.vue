<template>
  <v-app>
    <TheLayout>
      <router-view />
    </TheLayout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TheLayout from '@/views/common/layout/TheLayout.vue';

export default defineComponent({
  name: 'App',
  components: { TheLayout },
  setup() {},
});
</script>
