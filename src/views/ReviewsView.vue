<template>
    <PageComponent>
        <template #Content>
            <div class="bg-white">Reviews</div>
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
.cardsContainer {
    display: grid;
    grid-template-columns: repeat(2, calc(100%/2));
    perspective: 1000px;
}
</style>