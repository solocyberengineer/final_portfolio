<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <div class="container-fluid background px-5">
                <div class="container-fluid h-100 position-relative z-2 px-5 py-3">
                    <h1 class="title z-2 position-relative">Resume</h1>
                    <div ref="second" class="row page_display d-flex justify-content-center">
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
                                                <h6 class="fw-light text-center">Short Courses</h6>
                                            </div>
                                            <p class="h-50 px-4 py-5 text-center">
                                                Took some online courses to get some insight on <span class="fw-bold">web
                                                    development</span>.
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
                                                I did some <span class="fw-bold">self-teaching</span>. I picked up some
                                                <span class="fw-bold">pen-testing</span> skills, and this led to increasing
                                                my <span class="fw-bold">programming</span> skill.
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
                                                I got a casual job in <span class="fw-bold">retail</span> for <span
                                                    class="fw-bold">3 months</span>. I learn't and gained tons of experience
                                                in such a little time.
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
                                                I'm futhering my <span class="fw-bold">web development</span> skill and
                                                creating <span class="fw-bold">exposure</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page_container col-12 bg-black p-4 z-1" v-else>
                            <div class="page">
                                <div class="d-flex align-items-center justify-content-start p-0">
                                    <div class="page_title text-white fs-4 fw-light d-flex justify-content-between w-100">
                                        Skills
                                        <div>
                                            <button class="btn fs-2 text-white" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev"><i class="bi bi-arrow-left-circle"></i></button>
                                            <button class="btn fs-2 text-white" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next"><i class="bi bi-arrow-right-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row skills_container py-5">
                                    <div id="carouselExampleInterval" ref="skillsslider" class="slider carousel slide d-flex align-items-center"
                                        data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="row skills_container py-5">
                                                    <div class="slider d-flex align-items-center">
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="row skills_container py-5">
                                                    <div class="slider d-flex align-items-center">
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="row skills_container py-5">
                                                    <div class="slider d-flex align-items-center">
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                        <div class="skill">
                                                            <div
                                                                class="info d-flex flex-column justify-content-end p-2 align-items-center">
                                                                <b>Experienced</b>
                                                                <small>1 year/s</small>
                                                            </div>
                                                            <div
                                                                class="name d-flex flex-column justify-content-start p-1 align-items-center">
                                                                JavaScript</div>
                                                            <div class="image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
import PageComponent from '@/components/PageComp.vue';

export default {
    name: "ResumePage",
    data() {
        return {
            ex_ed: true,
            scroll: false,
            scroll_count: 0,
            timer: null
        }
    },
    watch: {
        ex_ed() {
            if (this.ex_ed == true) {
                this.disableScroll();
            }
            setTimeout(() => {
                if (this.ex_ed == false) {
                    this.enableScroll();
                }
            }, 1000);
        }
    },
    mounted() {
        this.setTextColor(true);
        this.setPath();
        console.log(this.$store.state.path);
        this.disableScroll();

        this.$refs.second.onmouseenter = () => {
            this.scroll = true;
        }
        this.$refs.second.onmouseleave = () => {
            this.scroll = false;
        }
        window.onwheel = (e) => {
            e.preventDefault();
            if (e.deltaY > 0) {
                this.ex_ed = false;
            } else if (e.deltaY < 0) {
                this.ex_ed = true;
            }
        }
    },
    unmounted() {
        this.enableScroll();
    },
    methods: {
        setPath() {
            this.$store.dispatch('setPath', this.routeName);
        },
        setTextColor(light) {
            this.$store.dispatch('setTextColor', light);
        },
        disableScroll() {
            // document.addEventListener('touchmove', this.preventDefault, { passive: false });
            document.addEventListener('wheel', this.preventDefault, { passive: false });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        enableScroll() {
            // document.removeEventListener('touchmove', this.preventDefault);
            document.removeEventListener('wheel', this.preventDefault);
            this.isScrollingDisabled = false;
        },
        preventDefault(event) {
            event.preventDefault();
        },
        navRight() {
            this.$refs.skillsslider.style['margin-left'] = `${+this.$refs.skillsslider.style['margin-left'].slice(0, -2) + this.$refs.skillsslider.parentElement.offsetWidth}px`;
        },
        navLeft() {
            this.$refs.skillsslider.style['margin-left'] = `${+this.$refs.skillsslider.style['margin-left'].slice(0, -2) - this.$refs.skillsslider.parentElement.offsetWidth}px`;
        }
    },
    components: {
        PageComponent,
    },
    computed: {
        routeName() {
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
    /* transform: translate(-50%, 0%); */
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
    animation-name: slideIn;
    animation-duration: 0.5s;
    animation-direction: forwards;
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
    animation-name: slideUp;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
}

.skills_container {
    /* background-color: white; */
    height: 100%;
    animation-name: slideUp;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    overflow: hidden;
}

.slider {
    /* background: red; */
    /* overflow-x: hidden; */
    margin-left: calc(calc(-100% / 5) * 0);
    /* it must be move by the length of the skill_container */
}

.skill {
    height: auto;
    /* border: 1px solid black; */
    min-width: calc(100% / 5);
    aspect-ratio: 1;
    padding: 3%;
    position: relative;
}

.image {
    border-radius: 1vw;
    background-color: var(--baby_blue);
    width: 100%;
    height: 100%;
    background-image: url('@/assets/js.png');
    background-position: center;
    background-size: cover;
    transition: 300ms;
    z-index: 1;
    transform: scale(1.01);

    &:hover {
        transform: scale(1.06);
    }
}

.info {
    width: 60%;
    height: 60%;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, calc(-50% + 50%));
    /* background-color: white; */
    border-right: 1px solid white;
    border-left: 1px solid white;
    /* border-bottom: 1px solid transparent; */
    color: white;
    position: absolute;
    border-radius: 0.6vw;
}

.name {
    width: 60%;
    height: 60%;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, calc(-50% - 34%));
    /* background-color: white; */
    border-right: 1px solid white;
    border-left: 1px solid white;
    /* border-bottom: 1px solid transparent; */
    color: white;
    position: absolute;
    border-radius: 0.6vw;
}

@keyframes slideIn {
    0% {
        transform: translate(-50%, 0%);
        opacity: 0;
    }

    100% {
        transform: translate(0%, 0%);
        opacity: 1;
    }
}

@keyframes slideUp {
    0% {
        transform: translate(0%, 50%);
        opacity: 0;
    }

    100% {
        transform: translate(0%, 0%);
        opacity: 1;
    }
}</style>