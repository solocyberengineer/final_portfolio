<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <h1>Projects</h1>
        </template>
    </PageComponent>
</template>

<script>
import PageComponent from '@/components/PageComp.vue';

export default {
    name: "ProjectsPage",
    mounted(){
        this.setPath();
        console.log( this.$store.state.path );
    },
    methods:{
        setPath(){
            this.$store.dispatch('setPath', this.routeName);
        }
    },
    components: {
        PageComponent,
    },
    computed: {
        routeName(){
            return this.$route.name;
        }
    }
}
</script>

<style scoped>

</style>
