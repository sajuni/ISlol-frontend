<template>
    <component :is="layout">
        <slot />
    </component>
</template>

<script>
import DefaultLayout from '@/views/layouts/DefaultLayout.vue';
import LoginOn from '@/views/session/LoginOn.vue';
import SignUp from '@/views/session/SignUp.vue';

export default {
    name: 'TheLayout',
    components: { DefaultLayout, LoginOn, SignUp },
    computed: {
        layout() {
            const layout = this.$route.meta.layout || 'DefaultLayout';
            return layout;
        }
    }
}
</script>