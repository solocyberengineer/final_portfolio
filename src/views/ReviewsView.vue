<template>
    <main class="container-fluid text-white vh-100" >
        <h1 class="text-center">Reviews</h1>
        <div class="row">
            <div class="col-lg-6 cardsContainer">
                <ReviewCardComponent class="h-100"/>
                <ReviewCardComponent class="h-100"/>
            </div>
            <div class="col-lg-6">
            </div>
        </div>
    </main>
</template>
<script>
import ReviewCardComponent from '../components/ReviewCard.vue';

export default {
    name: "ReviewsComponent",
    components: {
        ReviewCardComponent
    }
}
</script>

<style scoped>
main {
    /* background: white; */
}
.cardsContainer {
    display: grid;
    grid-template-columns: repeat(2, calc(100%/2));
    /* grid-template-rows: repeat(10, calc(100%/2)); */
    padding-inline: 5%;
    perspective: 1000px;
}
</style>