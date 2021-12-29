<template>
    <div class="common_body">
        <div class="title_wrap">
            <h1 class="title"><slot name="title"></slot></h1>
            <p class="text"><b><slot name="text"></slot></b></p>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "GlobalTitleArea"
}
</script>