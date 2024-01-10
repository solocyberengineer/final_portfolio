<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <div class="container-fluid background px-5">
                <div class="container-fluid h-100 position-relative z-2 px-5 py-3">
                    <h1 class="title z-2 position-relative">Resume</h1>
                    <div class="row page_display d-flex justify-content-center" >
                        <div class="page_container col-12 bg-black p-4 z-1" v-if="ex_ed">
                            <div class="page">
                                <div class="d-flex align-items-center justify-content-start p-0">
                                    <div class="page_title text-white fs-4 fw-light">Experiences & Education</div>
                                </div>
                                <div class="row card_container py-5">
                                    <div class="p-1 custom_card">
                                        <div class="bg-white h-100">
                                            <div class="h-25">
                                                <h5 class="text-center py-2 text-black">2020</h5>
                                                <h6 class="fw-light text-center">Matriculated</h6>
                                            </div>
                                            <p class="h-50 px-4 py-5 text-center">
                                                The year I <span class="fw-bold">finally finished</span> school.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-1 custom_card">
                                        <div class="bg-white h-100">
                                            <div class="h-25">
                                                <h5 class="text-center py-2 text-black">2020</h5>
                                                <h6 class="fw-light text-center">Short courses</h6>
                                            </div>
                                            <p class="h-50 px-4 py-5 text-center">
                                                Took some online courses to get some insight on <span class="fw-bold">web development</span>.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-1 custom_card">
                                        <div class="bg-white h-100">
                                            <div class="h-25">
                                                <h5 class="text-center py-2 text-black">2021</h5>
                                                <h6 class="fw-light text-center">Programming & Pentesting</h6>
                                            </div>
                                            <p class="h-50 px-4 py-5 text-center">
                                                I did some <span class="fw-bold">self-teaching</span>. I picked up some <span class="fw-bold">pen-testing</span> skills, and this led to increasing my <span class="fw-bold">programming</span> skill.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-1 custom_card">
                                        <div class="bg-white h-100">
                                            <div class="h-25">
                                                <h5 class="text-center py-2 text-black">2022</h5>
                                                <h6 class="fw-light text-center">Casual Job</h6>
                                            </div>
                                            <p class="h-50 px-4 py-5 text-center">
                                                I got a casual job in <span class="fw-bold">retail</span> for <span class="fw-bold">3 months</span>. I learn't and gained tons of experience in such a little time.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-1 custom_card">
                                        <div class="bg-white h-100">
                                            <div class="h-25">
                                                <h5 class="text-center py-2 text-black">2023</h5>
                                                <h6 class="fw-light text-center">Life Choices Academy</h6>
                                            </div>
                                            <p class="h-50 px-4 py-5 text-center">
                                                I'm futhering my <span class="fw-bold">web development</span> skill and creating <span class="fw-bold">exposure</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page_container col-12 bg-black p-4 z-1" v-else>
                            <div class="page">
                                <div class="d-flex align-items-center justify-content-start p-0">
                                    <div class="page_title text-white fs-4 fw-light">Skills</div>
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
import PageComponent from '@/components/PageComp.vue';

export default {
    name: "ResumePage",
    data(){
        return {
            ex_ed: true
        }
    },
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
        },
    }
}
</script>
<style scoped>

:root {
    --accent: #3498db;
}
.title {
    -webkit-text-stroke: 1px white;
    color: black;
    height: var(--navBar);
}

.page_display {
    /* background-color: white; */
    height: calc(100% - var(--navBar));
}

.page {
    border: 1px solid transparent;
    width: 100%;
    height: 100%;
}

.page_title {
    color: white;
    padding-inline: 0.8vw;
    padding-block: 0.8vh;
    /* border: 1px solid yellow; */
    border-radius: 0.4vw;
    /* text-decoration: underline; */
}

.page_container {
    /* right: 0%; */
    /* transform: translate(10%, 0%) scale(0.8); */
    height: calc(100% - var(--navBar) - 2%);
}

.card_container {
    display: grid;
    grid-template-columns: repeat(5, calc(100%/5));
    height: 100%;
}

</style>