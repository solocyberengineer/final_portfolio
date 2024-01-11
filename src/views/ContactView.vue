<template>
    <PageComponent>
        <template #Name>{{ routeName }}</template>
        <template #Content>
            <div class="container-fuild background">
                <div class="container-fluid h-100 position-relative z-2 px-5 py-3">
                    <h1 class="title text-white z-2 position-relative">Reach Me</h1>
                    <div class="row subtitle">
                        <small><i>I'm curious to find out what oppurtunities are ahead</i></small>
                    </div>
                    <div class="row contact_layout">
                        <div class="col-6 contact-information d-flex align-items-center flex-column">
                            <ul>
                                <li>Cell: <span>083 4964 817</span></li>
                                <li>Email: <span>rezaarsrvyte@gmail.com</span></li>
                            </ul>
                            <ul class="flex-row">
                                <li class=""><a href="" class=""><img src="@/assets/github.png" alt=""></a></li>
                                <li class=""><a href="" class=""><img src="@/assets/whatsapp.png" alt=""></a></li>
                                <li class=""><a href="" class=""><img src="@/assets/linkedin.png" alt=""></a></li>
                            </ul>
                        </div>
                        <div class="col-6 contact">
                            <h5 class="text-white text-center">Send a message.</h5>
                            <form action="" method="POST">
                                <div :class="{ titleUp : name }" class="input">
                                    <input @input="nameInput" name="name" type="text" required>
                                </div>
                                <div :class="{ titleUp : email }" class="input">
                                    <input @input="emailInput" name="email" type="email" required>
                                </div>
                                <div :class="{ titleUp : message }" class="input">
                                    <textarea @input="messageInput" name="message" rows="4" cols="30" style="resize: none;" required></textarea>
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
    data(){
        return {
            name: false,
            email: false,
            message: false,
            elem: null
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
        },
        isInput(string){
            if( string.length > 0 ){
                return true;
            } else {
                return false;
            }
        },
        nameInput(event){
            this.name = this.isInput( event.target.value );
        },
        emailInput(event){
            this.email = this.isInput( event.target.value );
        },
        messageInput(event){
            this.message = this.isInput( event.target.value );
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

    & small i {
        color: var(--baby_blue);
    }
}

.contact_layout {
    /* background-color: rgba(255,255,255,1); */
    height: calc( 100% - 4% - var(--navBar) );
    animation-name: slideDown;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
.contact {
    background: black;
}
.contact-information {
    justify-content: space-evenly;
}
.contact-information ul {
    list-style: none;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-inline: 0.8vw;
    padding-block: 1vh;
    color: rgba(255,255,255,1);
    font-weight: bolder;

    &:nth-child(2){
        border:none;
    }

    &:nth-child(1) li {
        padding-block: 1vh;
    }
    &:nth-child(2) li {
        width: 10%;
        padding: 1%;
    }

    & li span {
        /* color: red; */
        font-weight: 100;
    }

    & li a {
        padding: 0;
    }

    & li img {
        width: 100%;
        margin: 10px;
    }

    & li:nth-child(1){
        text-align: end;
    }

    & li:nth-child(1) img{
        filter: invert(1);
    }
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
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
        transform: translate(10%, 50%);
        padding-inline: 3%;
        /* height: 100%; */
        /* width: 100%; */
        font-size: 0.9vw;
        background-color: black;
        /* transition: 200ms; */
    }

    &:nth-child(1), &:nth-child(2) {
        &::before {
            transform: translate(28%, 50%);
        }
    }

    /* &:active {
        &::before {
            transform: translate(10%, -60%);
        }
    } */
}
.titleUp {
    &::before {
        transform: translate(10%, -60%) !important;
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
    width: 16vw;


    &:active {
        background-color: transparent;
    }
    &:focus {
        background-color: transparent;
    }
}
.input textarea {
    width: 30vw;
    height: 20vh;
    font-size: 1vw;
}


</style>