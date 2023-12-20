<template>
    <div class="page" :class="{ pageAnim: true }">
        <slot name="Name"></slot>
        <slot name="Content"></slot>
    </div>
</template>
<script>
export default {
    name: "PageComponent"
}
</script>
<style>
.page {
    /* box-shadow: 0 0 4px 2px rgba(0,0,0,0.3); */
    transform: scale(50%);
    height: 100%;
}
.pageAnim {
    animation-name: pageAnim;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

@keyframes pageAnim {
    0% {
        box-shadow: 0 0 10px 2px rgba(0,0,0,0.5);
        transform: scale(50%);
    }
    25% {
        box-shadow: 0 0 10px 2px rgba(0,0,0,0.5);
        transform: scale(50%);
    }
    100% {
        box-shadow: 0 0 4px 2px rgba(0,0,0,0);
        transform: scale(100%);
    }
}
</style>