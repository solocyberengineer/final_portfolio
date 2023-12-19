<template>
    <div class="page">
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
    box-shadow: 0 0 4px 2px rgba(0,0,0,0.3  );
}
</style>