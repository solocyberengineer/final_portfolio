<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <div class="container-fluid background">
                <div class="gradient"></div>
                <video class="back_video" poster="@/assets/hoonipig.jpg" autoplay="true" loop muted>
                    <source src="@/assets/hoonipig.mp4">
                </video>
                <div class="container-fluid h-100 position-relative z-2 px-5 py-3">
                    <h1 class="title text-white z-2 position-relative">My Projects</h1>
                    <div class="row project-layout">
                        <div class="col-4 p-info text-white d-flex align-items-start justify-content-center flex-column">
                            <p class="w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel expedita magnam unde sequi dolores, dolorem nobis illum tenetur deserunt, ipsam doloribus debitis amet fuga minus, dolor eos ratione similique. Beatae.</p>
                            <div class="d-flex w-50"> 
                                <button class="btn btn-dark m-1 p-btn">Github</button>
                                <button class="btn btn-light text-dark m-1 p-btn">Site</button>
                            </div>
                        </div>
                        <div class="col-8 slider-layout d-flex align-items-center">
                            <div class="slider-container">
                                <div class="project">
                                    <div class="image" image=""></div>
                                </div>
                                <div class="project">
                                    <div class="image" image=""></div>
                                </div>
                                <div class="project">
                                    <div class="image" image=""></div>
                                </div>
                                <div class="project">
                                    <div class="image" image=""></div>
                                </div>
                                <div class="project">
                                    <div class="image" image=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row p-footer">
                        <div class="p-nav">
                            <button class="btn"><img class="img img-fluid" src="@/assets/arrow.png" alt=""></button>
                            <button class="btn"><img class="img img-fluid" src="@/assets/arrow.png" alt=""></button>
                        </div>
                    </div>
                </div>
            </div>
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
        this.setTextColor(true);
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
        }
    }
}
</script>

<style scoped>
.background {
    background: url("@/assets/hoonipig.jpg");
    background-position: center;
    background-size: cover;
    height: 100%;
    overflow: hidden;
}

.back_video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 0;
    /* filter: blur(1px); */

    &::before {
        content: "asd";
        background-color: red;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* z-index: 0; */
    }
}
.gradient {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8));
    z-index: 1 !important;
}

.title {
    height: var(--navBar);
    -webkit-text-stroke: 1px white;
    color: transparent !important;
}
.project-layout {
    /* background-color: red; */
    height: calc( 100% - calc(var(--navBar) * 2) );
}

.p-info {
    /* background-color: yellow; */
}
.p-info p {
    font-weight: 100;
}
.p-btn {
    width: 50%;
}
.slider-layout{
    /* background-color: yellow; */
    padding-inline: 0;
}
.slider-container {
    width: 100%;
    height: 60%;
    /* background-color: red; */
    /* box-shadow: inset 10px 0 4px 2px rgba(0,0,0,0.5); */
    overflow: scroll;
    display: flex;
    /* flex-grow: 1; */
    position: relative;
    padding-left: 2%;

    /*  */
}
.project {
    /* background-color: white; */
    /* border: 1px solid blue; */
    height: 100%;
    min-width: 33.3%;
    padding-block: 2%;
    padding-inline: 1%;
    transition: 0.4s;
    /* aspect-ratio: 1; */
    /* &:hover {
        transform: scale(106%);
        border-radius: 0.9vw;
    } */
    /* &:hover .image {
        filter: blur(0px);
    } */
}
.image {
    /* filter: blur(1px); */
    box-shadow: 0 0 4px 2px rgba(0,0,0,0.6);
    background-image: url("@/assets/hoonipig.jpg");
    background-position: center;
    background-size: cover;
    background-color: green;
    width: 100%;
    height: 100%;
    border-radius: 0.6vw;
    /* transition: 600ms; */
}

.p-footer {
    /* background-color: red; */
    height: var(--navBar);
    padding: 10px;
}
.p-nav {
    height: var(--navBar) !important;
}
.p-nav button {
    height: 100%;
    padding: 0.6vw;
}
.p-nav button:nth-child(1) img {
    transform: rotateZ(180deg);
}
.p-nav button img {
    height: 100%;
    object-fit: contain;
}

.p-nav button:focus {
    border: none;
    outline: none;
}
.p-nav button:active {
    border: none !important;
    outline: none !important;
}
</style>
