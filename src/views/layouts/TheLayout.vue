<template>
    <component :is="layout">
        <slot />
    </component>
</template>

<script>
import DefaultLayout from '@/views/layouts/DefaultLayout.vue';
import LoginOn from '@/views/session/LoginOn.vue';
import SignUp from '@/views/session/SignUp.vue';
import Admin from '@/views/layouts/SideBar.vue';

export default {
    name: 'TheLayout',
    components: { DefaultLayout, LoginOn, SignUp, Admin },
    computed: {
        layout() {
            let layout = this.$route.meta.layout || 'DefaultLayout';
            return layout;
        }
    }
}
</script>