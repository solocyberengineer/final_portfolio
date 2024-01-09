<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <div class="container-fuild background">
                <div class="container-fluid h-100 position-relative z-2 px-5 py-3">
                    <h1 class="title text-white z-2 position-relative">Reach Me</h1>
                    <div class="row subtitle">
                        <small>I'm curious to find out what oppurtunities lie ahead</small>
                    </div>
                    <div class="row contact_layout">
                        <div class="col-6 contact">
                            <form action="" method="POST">
                                <div class="input">
                                    <input name="name" type="text" required>
                                </div>
                                <div class="input">
                                    <input name="email" type="email" required>
                                </div>
                                <div class="input">
                                    <textarea name="message" rows="4" cols="30" style="resize: none;" required></textarea>
                                </div>
                                <div>
                                    <button class="btn btn-outline-light fw-light mx-2 my-1" type="submit">send</button>
                                    <button class="btn btn-outline-light fw-light mx-2 my-1" type="button">clear</button>
                                </div>
                            </form>
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
    name: "ContactPage",
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
        },
        isInput(){

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

<style>

.background {
    background-color: black;
    height: 100%;
}
.title {
    height: var(--navBar);
}
.subtitle {
    /* background-color: white; */
    height: 4%;
    display: flex;
    align-items: center;
    justify-content: start;
}

.contact_layout {
    /* background-color: rgba(255,255,255,1); */
    height: calc( 100% - 4% - var(--navBar) );
    display: flex;
    /* align-items: center; */
    justify-content: center;
}
.contact {
    background: black;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    
}

.input:nth-child(1)::before {
    content: "name";
}
.input:nth-child(2)::before {
    content: "email";
}
.input:nth-child(3)::before {
    content: "enter your message";
}

.input {
    background-color: transparent;
    outline: none;
    border: 1px solid white;
    border-radius: 0.3vw;
    padding: 0.6vw;
    margin-block: 2vh;
    color: white;
    font-weight: 100;
    position: relative;

    &::before {
        /* content: "username"; */
        position: absolute;
        /* padding: 10px; */
        top: 0;
        left: 0;
        /* transform: translate(10%, -60%); */
        transform: translate(0%, 50%);
        padding-inline: 3%;
        /* height: 100%; */
        /* width: 100%; */
        font-size: 0.9vw;
        background-color: black;
        /* transition: 200ms; */
    }

    &:hover {
        &::before {
            /* transform: translate(0%, 50%); */
            transform: translate(10%, -60%);
        }
    }
}

.input :is(input, textarea) {
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 1vw;
}
.input input {
    width: 14vw;

    &:active {
        background-color: transparent;
    }
    &:focus {
        background-color: transparent;
    }
}
.input textarea {
    width: 20vw;
}

.text-light {
    /* background-color: rgba(255,255,255,0.2); */
}


</style>