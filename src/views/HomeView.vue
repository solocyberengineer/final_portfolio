<template>
    <PageComponent>
        <template #Content>
            <h1>Home</h1>
        </template>
    </PageComponent>
</template>

<script>
import PageComponent from '@/components/PageComp.vue';

export default {
    name: "HomePage",
    data(){
        return {
            sceneVisible: false,
            render: null
        }
    },
    components: {
        PageComponent
    }
}
</script>

<style scoped>
.display-1 {
    font-family: 'Anton', Arial, Helvetica, sans-serif;
    color: white;
    text-align: center;
}
.display-1 span {
    display: block;
}
</style>