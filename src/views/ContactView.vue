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
                        <div class="col-lg-6 my-5 contact">
                            <h5 class="text-white text-center py-3">Send a message.</h5>
                            <form action="https://formspree.io/f/mqkvwprr" method="POST">
                                <div :class="{ titleUp : name }" class="input">
                                    <input v-model="nameIn" @input="nameInput" name="name" type="text" required>
                                </div>
                                <div :class="{ titleUp : email }" class="input">
                                    <input v-model="emailIn" @input="emailInput" name="email" type="email" required>
                                </div>
                                <div :class="{ titleUp : message }" class="input">
                                    <textarea v-model="messageIn" @input="messageInput" name="message" rows="4" cols="30" style="resize: none;" required></textarea>
                                </div>
                                <div>
                                    <button ref="sub" class="btn btn-outline-light fw-light mx-2 my-1" type="submit">send</button>
                                    <button class="btn btn-outline-light fw-light mx-2 my-1" type="button" @click="clear_form">clear</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 my-5 contact-information d-flex align-items-center flex-column">
                            <ul>
                                <li v-for="(value, key) in contact.details" :key="key">{{ key }}: <span>{{value}}</span></li>
                            </ul>
                            <ul class="flex-row">
                                <li v-for="social in contact.socials" :key="social" class=""><a :href="social.link" class=""><img :src="social.image" alt=""></a></li>
                                <!-- <li class=""><a href="#" class=""><img src="@/assets/whatsapp.png" alt=""></a></li> -->
                                <!-- <li class=""><a href="#" class=""><img src="@/assets/linkedin.png" alt=""></a></li> -->
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
    name: "ContactPage",
    data(){
        return {
            name: false,
            email: false,
            message: false,
            elem: null,
            nameIn: null
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
        },
        clear_form(){
            this.nameIn = ''
            this.emailIn = ''
            this.messageIn = ''
        },
        // submitForm(){
        //     alert('form submitted');
        // }
    },
    components: {
        PageComponent,
    },
    computed: {
        routeName(){
            return this.$route.name;
        },
        contact(){
            return this.$store.state.contactData;
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


@media screen and (max-width: 991px) {
    .background {
        height: auto !important;
    }
    .input {
        &::before {
            font-size: 1.2vw;
        }
    }
}

@media screen and (max-width: 700px) {
    .input {
        &::before {
            font-size: 1.8vw;
        }
    }
}

@media screen and (max-width: 500px) {
    .input {
        &::before {
            font-size: 2.6vw;
        }
    }
    .contact-information {
        & ul li {
            font-size: 3.4vw
        }
        & ul:nth-child(2) li {
            width: 20%;
        }
    }
}

@media screen and (max-width: 300px) {
    
}

</style>