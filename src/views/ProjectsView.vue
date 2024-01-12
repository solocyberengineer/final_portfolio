<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <div class="container-fluid background">
                <div class="gradient"></div>
                <video class="back_video" :poster="current_project.thumbnail" autoplay="true" loop muted>
                    <source :src="current_project.video">
                </video>
                <div class="container-fluid h-100 position-relative z-2 px-5 py-3">
                    <h1 class="title text-white z-2 position-relative">My Projects</h1>
                    <div class="row project-layout">
                        <div class="col-lg-4 p-info text-white d-flex align-items-start justify-content-center flex-column">
                            <!-- {{ this.current_project }} -->
                            <p class="w-75">{{ this.current_project.description }}</p>
                            <div class="d-flex w-50">
                                <button class="btn btn-dark m-1 p-btn" @click="github">Github</button>
                                <button class="btn btn-light text-dark m-1 p-btn" @click="site">Site</button>
                            </div>
                        </div>
                        <div id="projectCarousel" class="col-lg-8 slider-layout d-flex align-items-center carousel slide" data-bs-ride="carousel">
                            <div class="slider-container carousel-inner">
                                <div class="carousel-item" data-bs-interval="10000" v-for="(project, index) in projects" :key="project" :class="{ 'carousel-item': true, 'active': index === activeIndex }" @click="setProject(project.name)">
                                    <div class="d-flex h-100 justify-content-center">
                                        <div class="project">
                                            <div class="image" image="" :style="{
                                                'background-image': `url(${project.thumbnail})`,
                                                'background-position': 'center',
                                                'background-size': 'cover'
                                            }"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row p-footer">
                        <div class="p-nav">
                            <button class="btn"><img class="img img-fluid" src="@/assets/arrow.png" alt="" type="button"
                                    data-bs-target="#projectCarousel" data-bs-slide="prev"></button>
                            <button class="btn"><img class="img img-fluid" src="@/assets/arrow.png" alt="" type="button"
                                    data-bs-target="#projectCarousel" data-bs-slide="next"></button>
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
    data(){
        return {
            activeIndex: 0,
            current_project: {
                "name":"keyboard",
                "thumbnail": "https://i.ibb.co/h8JcQ9z/game-controller.png",
                "video": '',
                "description": "Click a project for it to display here",
                "github_link": "https://github.com",
                "netlify_link": "https://netlify.com"
            }
        }
    },
    mounted() {
        // this.current_project = this.projects[1];
        this.setPath();
        console.log(this.$store.state.path);
        this.setTextColor(true);
    },
    methods: {
        setPath() {
            this.$store.dispatch('setPath', this.routeName);
        },
        setTextColor(light) {
            this.$store.dispatch('setTextColor', light);
        },
        setProject(){
            this.current_project = this.projects[this.activeIndex];
            console.log( this.current_project );
            // alert('hello world');
        },
        github(){
            location.href = this.current_project.github_link
        },
        site(){
            location.href = this.current_project.netlify_link
        }
    },
    components: {
        PageComponent,
    },
    computed: {
        routeName() {
            return this.$route.name;
        },
        projects(){
            return this.$store.state.projectsData;
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
    transform: translate(-50%, -50%);
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
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
    z-index: 1 !important;
}


.project-layout {
    /* background-color: red; */
    height: calc(100% - calc(var(--navBar) * 2));
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

.slider-layout {
    /* background-color: yellow; */
    padding-inline: 0;
}

.slider-container {
    width: 100%;
    height: 60%;
    /* background-color: red; */
    /* box-shadow: inset 10px 0 4px 2px rgba(0,0,0,0.5); */
    overflow: hidden;
    display: flex;
    /* flex-grow: 1; */
    position: relative;
    padding-left: 2%;

    /*  */
}

.project {
    height: 100%;
    width: 33.33%;
    padding-block: 2%;
    padding-inline: 1%;
    transition: 0.4s;
}

.image {
    /* filter: blur(1px); */
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.6);
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
    display: flex;
    justify-content: center;
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

@media screen and (max-width: 991px) {
    .background {
        height: 100vh !important;
    }
    .p-info p {
        font-weight: 100;
        font-size: 2vw;
    }
}
@media screen and (max-width: 500px) {
    .background {
        height: 100vh !important;
    }
    .p-info p {
        font-weight: 100;
        font-size: 3vw;
    }
    [type="button"] {
        padding: 10%;
    }
    .p-btn {
        font-size: 4vw;
        width: 100%;
    }
}

</style>
