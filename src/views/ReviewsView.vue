<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <div class="container-fluid background px-5">
                <!-- <div class="row title">
                    <h1>Reviews</h1>
                </div> -->
                <div class="container-fluid h-100 position-relative z-2 px-lg-5 py-3">
                    <h1 class="title text-white z-2 position-relative">Reviews</h1>
                    <div class="row subtitle">
                        <h5>What people think about my work</h5>
                    </div>
                    <div class="row reviews_layout px-lg-5 mx-lg-5">
                        <div class="col-12 h-100 reviews px-lg-5 overflow-scroll">
                            <div class="row review my-4" v-for="review of testimonialsData" :key="review">
                                <div class="person_image col-lg-3" :style="{
                                    background: `radial-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.2) ), url(${review.profile})`}"></div>
                                <div class="person_quote col-lg-9 d-flex align-items-center justify-content-center flex-column h-100 py-4 px-4">
                                    <div style="color: var(--baby_blue)">{{ review.name }}</div>
                                    <div>
                                        <p class="text-light">{{ review.quote }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </PageComponent>
</template>
<script>
import PageComponent from '../components/PageComp.vue';

export default {
    name: "ReviewsComponent",
    mounted(){
        this.setTextColor(true);
        this.setPath();
        console.log( this.$store.state.path );

        console.log('asd',this.testimonialsData)
    },
    methods:{
        setPath(){
            this.$store.dispatch('setPath', this.routeName);
        },
        setTextColor(light){
            this.$store.dispatch('setTextColor', light);
        }
    },
    components: {
        PageComponent,
    },
    computed: {
        routeName(){
            return this.$route.name;
        },
        testimonialsData(){
            return this.$store.state.testimonialsData;
        }
    }
}
</script>

<style scoped>
.background {
    /* background: linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.9) ); */
    background: black;
    height: 100%;
}

.title {
    height: var(--navBar);
    /* -webkit-text-stroke: 1px black; */
    -webkit-text-fill-color: white;
}

.subtitle {
    height: var(--navBar);
    text-align: center;
}

.subtitle h5 {
    -webkit-text-stroke: 1px #3498db;
    color: black;
}

.reviews_layout {
    /* background-color: red; */
    height: calc( 100% - var(--navBar) - var(--navBar) - 2% );
    min-height: fit-content;
    animation-name: slideInRight;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

.reviews {
    /* background-color: blue; */

}

.review {
    /* background-color: rgba(255,255,255,0.7); */
    /* background-color: white; */
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    border-right: 1px solid black;
    backdrop-filter: invert(2px);
    border-radius: 0.8vw;
    width: 100%;
    /* height: 25%; */
    /* color:white !important; */
    overflow: hidden;
    box-shadow: 0 0 4px 2px rgba(0,0,0,0.2);
}

.person_image {
    /* background-color: yellow; */
    background: radial-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.2) ), url("@/assets/IMG_82352.jpg");
    background-size: cover;
    background-position: center;
}
.person_quote {
    & p {
        color: white;
    }
    &:hover {
    }
}

.pwatch {
    background-image: url("@/assets/pp.png");
    width: 100%;
    height: 100%;
    filter: blur(2px);
}

:is( .bi-star-fill, .bi-star-half) {
    color: yellow;
    padding: 1px;
}

@media screen and (max-width: 991px) {
    .background {
        height: auto !important;
    }
}
</style>