<template>
    <footer class="container-fluid position-fixed bg-dark text-center d-flex align-items-center justify-content-center" :class="{ hideFooter: open, showFooter: !open }">
        <small class="text-white">Copyright&copy;{{ year['year'] }}</small>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
    props: {
        bottom: Number
    },
    watch: {
        bottom(){
            if( this.bottom == -14 ){
                this.open = false
            } else if(this.bottom == 0){
                this.open = true
            }
        }
    },
    data(){
        return {
            timeAPIURL: 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg',
            year: {
                year: '...',
                expire: null
            },
            animate: 'paused',
            open: false
        }
    },
    mounted(){
        this.year = localStorage.getItem('year') ? JSON.parse( localStorage.getItem('year') ) : {year: '...', expire: null}

        try {
            if( !this.year['expire'] || this.year['expire'] < (new Date().getTime() - 3600) ){
                fetch(this.timeAPIURL).then(res => {
                    return res.json()
                }).then(res => {
                    this.year = {
                        year: new Date(res['datetime']).getFullYear(),
                        expire: new Date().getTime()
                    }
                    localStorage.setItem('year', JSON.stringify(this.year))
                })
            }
        } catch(e) {
            this.year = {
                year: new Date().getFullYear(),
                expire: null
            }
        }
    },
    methods: {
    }
}
</script>

<style scoped>
footer {
    bottom: 0vh;
    font-family: 'Inter', sans-serif;
    font-size: 100 !important;
    height: 14vh;
}

.hideFooter{
    animation-name: hideFooter;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
}
.showFooter{
    animation-name: showFooter;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
}

@keyframes hideFooter {
    0% {
        bottom: 0vh;
    }
    100% {
        bottom: -14vh;
    }
}

@keyframes showFooter {
    0% {
        bottom: -14vh;
    }
    100% {
        bottom: 0vh;
    }
}
</style>