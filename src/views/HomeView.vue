<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <div class="container-fluid background">
                <div class="row h-100 z-1">
                    <div class="col-lg-7 px-4 py-5 terminal-container">
                        <div ref="terminal" class="terminal text-white">
                            <div ref="terminal_out" class="container tab-container h-100">
                                <!-- <div ref="tab_title" class="tab-title"><small>Terminal 1</small></div> -->
                                <div ref="tty_interface" class="tty-interface px-lg-5 d-flex align-items-center justify-content-evenly flex-column h-100">
                                    <h1 class="fw-bolder">Welcome to</h1>
                                    <h1 class="fw-bolder">my page.</h1>
                                    <h1>I'm Rezaar</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 p-5 profile_cover">
                        <div class="image-viewer">
                            <div class="w-50 p-4 img">
                                <div ref="image" class="image" :style="{
                                        background: `radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${homeData.background})`,
                                        'background-size': 'cover'
                                    }">
                                </div>
                            </div>
                            <div class="fs-4 fw-light py-5 text-light">I'm an aspiring 
                                <span class="aspiration">FullStack Developer</span>
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
    name: "HomePage",
    data(){
        return {
            sceneVisible: false,
            render: null,
            cWidth: window.innerWidth,
            cHeight: window.innerHeight,
            img: null
        }
    },
    mounted(){
        this.setTextColor(true);
        // this is used to restrict usage of numbers out of the following range
        Number.prototype.clamp = function(min, max) {
            return Math.min(Math.max(this, min), max);
        };
        this.setPath();
        // console.log( this.$store.state.path );

        document.onmousemove = (e) => {
            // console.log(e);
            // console.log( "asd: ", this.terminalRotation() );
            let degreesX = 50;
            let degreesY = 30;
            let center = [-window.innerWidth / 2, -window.innerHeight / 2];
            let x = (center[0] + e.clientX) / window.innerWidth * 2 * degreesX;
            let y = (center[1] + e.clientY) / window.innerHeight * 2 * -degreesY;
            // console.log(`x: ${x}, y: ${y}`);
            try {
                this.$refs.terminal.style['transform'] = `translate3d(0, 0, -200px) rotateY(${x}deg) rotateX(${y}deg) scale(100%)`;
            } catch (e){
                return;
            }
        }


    },
    methods:{
        setPath(){
            this.$store.dispatch('setPath', this.routeName);
        },
        setTextColor(light){
            this.$store.dispatch('setTextColor', light);
        },
    },
    components: {
        PageComponent,
    },
    computed: {
        routeName(){
            return this.$route.name;
        },
        homeData(){
            return this.$store.state.homeData;
        }
    }
}
</script>

<style scoped>

.background {
    /* background: linear-gradient( 94deg, black var(--col-5), rgba(0,0,0,0.7) calc( var(--col-5) + 2px), rgba(0,0,0,0.7) ), url('@/assets/IMG_8235.jpg'); */
    background-position: center;
    background-size: cover;
    padding-top: var(--navBar);
    /* height: 100vh !important; */
}
.terminal-container {
    perspective: 1000px;
    transform-style: preserve-3d;
    /* perspective-origin: 50% 50%; */
    padding-bottom: 0 !important;
}

.terminal {
    /* background-color: var(--terminal); */
    height: 90%;
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
    transform: translate3d(0, 0, -200px) rotateY(40deg) rotateX(20deg) scale(100%);
    /* perspective: 1000px; */
    transform-style: preserve-3d;
    /* transition: transform 0.6s; */
    padding-inline: 2%;
    padding-block: 2%;

    &::before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        transform: translate3d(0, 0, 0px) rotateY(0deg) rotateX(0deg) scale(100%);
        border: 2px solid white;
        background-color: transparent;
        /* backdrop-filter: blur(0.1px); */
    }
}

.tab-container {
    /* background-color: var(--terminal); */
    transform: translateZ(50px) scale(96%);
    /* box-shadow: 0 0 40px 2px rgba(0,0,0,0.2); */
    padding-inline: 0;
    display: flex;
    flex-direction: column;
    transition: 500ms;
    position: absolute;
    top: 0;
    left: 0;
}

.tab-container:last-child {
    transform: translateZ(120px) scale(96%);

}

.tab-title {
    background-color: var(--terminal);
    width: 20%;
    height: 8%;
    /* left: 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid white;
    border-bottom: 2px solid transparent;
    border-right:2px solid white;
    border-left: 2px solid white;
}

.tab-container:last-child .tab-title {
    /* margin-left: 20%; */
}

.tty-interface {
    /* background: var(--terminalRGBA); */
    width: 100%;
    height: 92%;
    /* border-top: 2px solid white; */
    /* border-bottom: 2px solid white; */
    /* border-right: 2px solid white; */
    /* border-left: 2px solid white; */
    transition: 500ms;
    padding: 6px;
    /* color: yellow; */
}
.tty-interface h1 {
    font-size: 5vw;
    -webkit-text-stroke: 2px yellow;
    color: transparent;

    &:first-child {
        text-align: start;
        width: 100%;
    }

    &:last-child {
        text-align: end;
        width: 100%;
    }
}

.terminal-container:hover .terminal {
    transform: translate3d(0, 0, -200px) rotateY(0deg) rotateX(0deg) scale(100%);
}

.terminal-container:hover .tab-container {
    transform-style: none;
    transform: translateZ(0px) scale(96%);
}

.terminal-container:hover .tab-container:nth-child(1){
    /* transform-style: none; */
    /* transform: translateZ(1px) scale(96%); */
}



.terminal-container:hover .tab-title {
    border-bottom: 1px solid transparent;
}

.profile_cover {
    z-index: 1;
    /* background: linear-gradient(-20deg, black, black); */
}

.image-viewer {
    width: 100%;
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background: red; */
    /* border: 1px solid white; */
    /* border-radius: 1vw; */
}
.img {
    border: 1px solid white;
    border-radius: 1.5vw;
}
.image {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    border-radius: 1vw;
    /* background: radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('@/assets/profile_portfolio.jpg'); */
    /* background: radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('https://i.ibb.co/Lr9hNQm/profile-portfolio.jpg'); */
    background-size: cover;
    /* background-position: center; */
    /* border: 10px dashed black; */
    background-blend-mode:color-dodge;
    /* animation-name: pRotation;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(.25, .25, .25, .25); */
    /* animation-play-state: paused; */
    
}

.window-tab-container {
    width: 100%;
    height: 10%;
    /* background: red; */
}

.window-tab-container ul {
    list-style: none;
    display: flex;
    justify-content: end;
    height: 100%;
    width: 100%;
    padding: 0;
    /* widows: ; */
}

.window-tabs {
    /* border: 1px solid blue; */
    height: 100%;
    aspect-ratio: 1;
    padding: 6px;
    /* background: grey; */
}

.icon {
    background-color: rgba(255,255,255,1);
    width: 100%;
    height: 100%;
    border-radius: 0.16vw;
}

.aspiration {
    font-weight: 900;
    color: black;
    /* text-shadow: 0 0 2px black,
                 0 0 2px black,
                 0 0 2px black,
                 0 0 2px black,
                 0 0 2px black; */
    /* border-bottom: 1px solid black; */
    -webkit-text-stroke: 1px var(--baby_blue);
}

.back_video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;

    &::before {
        content: "asd";
        background-color: red;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}

@media screen and (max-width: 300px) {
    .terminal-container {
        height: 80vh;
    }
}

@media screen and (max-width: 991px) {
    .background {
        height: auto !important;
    }
    .terminal {
        transform: translate(0,0) rotateX(0deg) rotateY(0deg);
        
        &::before {
            border: none;
            height: 50%;
        }
    }
    .terminal-container {
        height: 60vh;
        /* padding-inline: auto; */

        & h1 {
            font-size: 6vw;
            -webkit-text-stroke: 1px yellow;
        }
        & h1:nth-child(1){
            text-align: center
        }
        & h1:nth-child(3){
            text-align: right;
            /* text-decoration: underline; */
            /* padding-block: 10px; */
        }
    }
    .profile_cover {
        padding: 10% !important;
    }
    .img {
        padding: 1px !important;
    }
}

</style>