<template>
    <PageComponent>
        <template #Content>
            <h1>Reviews</h1>
        </template>
    </PageComponent>
</template>
<script>
// import ReviewCardComponent from '../components/ReviewCard.vue';
import PageComponent from '../components/PageComp.vue';

export default {
    name: "ReviewsComponent",
    components: {
        // ReviewCardComponent,
        PageComponent,
    }
}
</script>

<style scoped>

</style>