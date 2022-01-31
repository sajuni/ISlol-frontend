<template>
    <article class="common_body">
        <section class="title_wrap">
            <h1 class="title"><slot name="title"></slot></h1>
            <p class="text"><b><slot name="text"></slot></b></p>
        </section>
        <section class="content">
            <slot name="content"></slot>
        </section>
    </article>
</template>