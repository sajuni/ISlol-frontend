<template>
    <article class="admin_wrap">
        <section class="admin_title">
            <b-card :title="title" :sub-title="subTitle"></b-card>
        </section>
        <section class="admin_content">
            <slot name="content"></slot>
        </section>
    </article>
</template>

<script>
export default {
    props: {
        title:{
            type: String,
            default: ""
        },
        subTitle: {
            type: String,
            default: ""
        }
    }
}

</script>