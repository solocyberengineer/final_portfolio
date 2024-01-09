<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <div class="container-fluid h-100 background">
                <div class="row h-100">
                    <div class="col-5 p-5">
                        <div class="image-viewer">
                            <div class="image"></div>
                            <div class="fs-4 fw-light py-5 text-light">I'm an aspiring 
                                <span class="aspiration">FullStack Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 px-4 py-5 terminal-container">
                        <div ref="terminal" class="terminal text-white">
                            <div class="container tab-container h-100"><div ref="tab_title" class="tab-title"><small>Terminal 1</small></div><div ref="tty_interface" class="tty-interface">
                                <span>$&nbsp;</span>whoami
                            </div></div>
                            <div class="container tab-container h-100"><div ref="tab_title" class="tab-title"><small>Terminal 2</small></div><div ref="tty_interface" class="tty-interface">
                                <span>$&nbsp;</span>netstat -anop
                            </div></div>
                        </div>
                        <div class="window-tab-container">
                            <ul>
                                <li class="window-tabs"><div class="icon"></div></li>
                                <li class="window-tabs"><div class="icon"></div></li>
                            </ul>
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
            cHeight: window.innerHeight
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
            console.log(e);
            // console.log( "asd: ", this.terminalRotation() );
            let degreesX = 50;
            let degreesY = 30;
            let center = [-window.innerWidth / 2, -window.innerHeight / 2];
            let x = (center[0] + e.clientX) / window.innerWidth * 2 * degreesX;
            let y = (center[1] + e.clientY) / window.innerHeight * 2 * -degreesY;
            console.log(`x: ${x}, y: ${y}`);
            try {
                this.$refs.terminal.style['transform'] = `translate3d(0, 0, -200px) rotateY(${x}deg) rotateX(${y}deg) scale(100%)`;
            } catch (e){
                return;
            }
        }
        this.$refs.terminal.onmouseenter = () => {
            // this.$refs.terminal.style['background'] = "var(--terminal)";
            this.$refs.tty_interface.style['background'] = "var(--terminal)";
        }
        this.$refs.terminal.onmouseleave = () => {
            this.$refs.tty_interface.style['background'] = "var(--terminalRGBA)";
            // this.$refs.terminal.style['background'] = "var(--terminalRGBA)";

        }
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
    background: linear-gradient( 94deg, black var(--col-5), rgba(0,0,0,0.8) calc( var(--col-5) + 2px), rgba(0,0,0,0.8) ), url('@/assets/IMG_8235.jpg');
    background-position: center;
    background-size: cover;
    padding-top: var(--navBar);
}
.terminal-container {
    perspective: 1000px;
    transform-style: preserve-3d;
    /* perspective-origin: 50% 50%; */
    padding-bottom: 0 !important;
}

.terminal {
    background-color: var(--terminal);
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
        transform: translate3d(0, 0, 100px) rotateY(0deg) rotateX(0deg) scale(100%);
        border: 2px solid rgba(255,255,255,0.4);
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
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid grey;
    border-bottom: 2px solid transparent;
    border-right:2px solid grey;
    border-left: 2px solid grey;
}

.tab-container:last-child .tab-title {
    margin-left: 20%;
}

.tty-interface {
    background: var(--terminalRGBA);
    width: 100%;
    height: 92%;
    border-top: 2px solid grey;
    border-bottom: 2px solid grey;
    border-right: 2px solid grey;
    border-left: 2px solid grey;
    transition: 500ms;
    padding: 6px;
    color: lime;
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

.terminal-container:hover .tty-interface {
    border: 1px solid transparent;
    box-shadow: inset 0 0 2px 1px rgba(0,0,0,0.3);
}

.terminal-container:hover .tab-title {
    border-bottom: 1px solid transparent;
}

.image-viewer {
    width: 100%;
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.image {
    width: 50%;
    height: auto;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('@/assets/profile_portfolio.jpg');
    background-size: cover;
    /* background-position: center; */
    border: 10px dashed black;
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
    -webkit-text-stroke: 1px white;
}

@keyframes pRotation {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
}
</style>