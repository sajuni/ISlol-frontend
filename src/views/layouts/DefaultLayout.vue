<template>
    <div class="wrap">
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script>
import Header from '@/views/common/Header.vue';
import Footer from '@/views/common/Footer.vue';

export default {
    name: 'DefaultLayout',
    components: {
        Header,
        Footer,
    },
}
</script>