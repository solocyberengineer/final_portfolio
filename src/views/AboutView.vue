<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <div class="container-fluid background px-lg-5">
                <div class="container-fluid h-100 position-relative z-2 px-lg-5 py-3">
                    <h1 class="title text-black z-2 position-relative">About</h1>
                    <div class="row about_layout">
                        <div class="image_layout h-100 col-sm-12 col-lg-4 p-lg-5 py-5">
                            <div class="image h-100"></div>
                        </div>
                        <div class="description h-100 col-sm-12 col-lg-4 text-white p-lg-5 d-flex flex-column justify-content-evenly">
                            <div>
                                <h3>Alittle About Me</h3>
                                <p class="fw-light">I am 21 years old, born in 2002 April. I am training a pattern ready to code and discover the world of development. All ideas start simple, they say.  They DO! I figured, and that's where I found my passion to discover the "magic" behind computers.</p>
                            </div>
                            <div>
                                <h3>Quote</h3>
                                <i class="bi bi-quote"></i>
                                <i class="fw-light"><small style="color: white;">The master has failed more times than the beginner has even tried. When you procrastinate you become a slave to yesterday. Failing to plan, is like planning to fail.</small><br><br><span style="color:yellow">by Stephen McCranie.</span></i>
                            </div>
                        </div>
                        <div class="in_grid h-100 col-sm-12 col-lg-4">
                            <h3 class="interest_title d-flex justify-content-center align-items-center text-white">Interests</h3>
                            <div class="interests p-4">
                                <div class="interest">
                                    <small class="fw-medium">Game Development</small>
                                    <i class="bi bi-controller fs-1"></i>
                                    <small class="fw-medium">Unity 3D Engine</small>
                                </div>
                                <div class="interest">
                                    <small class="fw-medium">Scripting Exploits</small>
                                    <i class="bi bi-filetype-py fs-1"></i>
                                    <small class="fw-medium">Python3</small>
                                </div>
                                <div class="interest">
                                    <small class="fw-medium">Playing Sports</small>
                                    <i class="bi bi-person-walking fs-1"></i>
                                    <small class="fw-medium">Team Activites</small>
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
import PageComponent from '@/components/PageComp.vue'

export default {
    name: "AboutPage",
    mounted(){
        this.setTextColor(true);
        this.setPath();
        console.log( this.$store.state.path );
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
.title {
    -webkit-text-stroke: 1px white;
    height: var(--navBar);
}
a {
    padding-top: 100px;
}

.about_layout {
    background: black;
    height: calc( 100% - var(--navBar) );
    animation-name: slideIn;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
}
.description div {
    & h3 {
        font-size: 2.3vw;
    }
    & p {
        font-size: 1.2vw;
    }
}
.image {
    background: url('@/assets/profile_portfolio.jpg');
    background-size: cover;
    background-position: center;
    mix-blend-mode: difference;
}

.interest_title {
    height: var(--navBar);
}
.interests {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(10, auto);
    height: calc( 100% - var(--navBar) );
}

.interest {
    aspect-ratio: 1;
    border: 10px solid black;
    background-color: white;
    border-radius: 1vw;
    display: flex;
    margin-block:auto;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
}

.interest small {
    font-size: 0.8vw;
}


@media screen and (max-width: 991px) {
    .background {
        height: auto !important;
    }
    .image_layout {
        height: 100vh !important;
    }
    .interest small {
        font-size: 2.4vw;
    }
    .description div {
        & h3 {
            font-size: 3vw;
        }
        & p {
            font-size: 2.2vw;
        }
    }
    .interests {
        padding: 16% !important;
    }
    .in_grid {
        padding-block: 5%;
    }
    .interests {
        padding-block: 2% !important;
    }
}

@media screen and (max-width: 512px) {
    .description div {
        & h3 {
            font-size: 5.5vw;
        }
        & p {
            font-size: 3.2vw;
        }
    }
    
}

@media screen and (max-width: 300px) {
    .description div {
        & h3 {
            font-size: 5.5vw;
        }
        & p {
            font-size: 4vw;
        }
    }
}
</style>