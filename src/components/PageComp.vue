<template>
    <div class="page" :class="{ pageAnim: true }">
        <slot name="Name"></slot>
        <slot name="Content"></slot>
    </div>
</template>
<script>
export default {
    name: "PageComponent",
    props: {
        canPlayAnim: Boolean
    }
}
</script>
<style>
.page {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    transform: scale(50%);
}

.pageAnim {
    animation-name: grow;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    /* animation-timing-function: cubic-bezier(0.5,0.3,0.2,0); */
}

@keyframes grow {
    0% {
        transform: scale(50%);
    }
    50% {
        transform: scale(50%);
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
    }
    100% {
        transform: scale(100%);
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0);
    }
}
</style>