<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <div class="container-fluid background px-5">
                <!-- <div class="row title">
                    <h1>Reviews</h1>
                </div> -->
                <div class="container-fluid h-100 position-relative z-2 px-5 py-3">
                    <h1 class="title text-black z-2 position-relative">About</h1>
                    <div class="row about_layout">
                        <div class="h-100 col-4 p-5">
                            <div class="image h-100"></div>
                        </div>
                        <div class="description h-100 col-4 text-white p-5 overflow-scroll d-flex flex-column justify-content-evenly">
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
                        <div class="h-100 col-4">
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
                                    <small class="fw-medium">Playing Sports/Running</small>
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
    grid-template-rows: repeat(10, 40%);
    height: calc( 100% - var(--navBar) );
}

.interest {
    border: 10px solid black;
    background-color: white;
    border-radius: 1vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
}

</style>