<template>
    <footer class="container-fluid bg-dark text-center flex-column d-flex align-items-center justify-content-center">
        <div class="pt-4">
            <a class="link mx-1" href="#"><small class="quick_links">Github</small></a>
            <a class="link mx-1" href="#"><small class="quick_links">Whatsapp</small></a>
            <a class="link mx-1" href="#"><small class="quick_links">LinkedIn</small></a>
        </div>
        <small class="text-white py-4">Rezaar's Portfolio&copy;{{ year['year'] }}</small>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
    props: {
        bottom: Number
    },
    watch: {
        bottom() {
            if (this.bottom == -14) {
                this.open = true
            } else if (this.bottom == 0) {
                this.open = false
            }
        }
    },
    data() {
        return {
            timeAPIURL: 'https://worldtimeapi.org/api/timezone/Africa/Johannesburg',
            year: {
                year: '...',
                expire: null
            },
            animate: 'paused',
            open: true
        }
    },
    mounted() {
        this.year = localStorage.getItem('year') ? JSON.parse(localStorage.getItem('year')) : { year: '...', expire: null }
        if (!this.year['expire'] || this.year['expire'] < (new Date().getTime() - 3600)) {
            fetch(this.timeAPIURL).then(res => {
                return res.json()
            }).then(res => {
                this.year = {
                    year: new Date(res['datetime']).getFullYear(),
                    expire: new Date().getTime()
                }
                localStorage.setItem('year', JSON.stringify(this.year))
            }).catch(() => {
                this.year = {
                    year: new Date().getFullYear(),
                    expire: null
                }
            })
        }
    },
    methods: {}
}
</script>

<style scoped>
footer {
    font-family: 'Inter', sans-serif;
    font-size: 100 !important;
    /* height: 14vh; */
    position: relative;
}

.hideFooter {
    animation-name: hideFooter;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
}

.showFooter {
    animation-name: showFooter;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
}

.quick_links {
    font-size: 0.9vw;
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


@media screen and (max-width: 991px) {
    .quick_links {
        font-size: 1.4vw;
    }
}

@media screen and (max-width: 500px) {
    .quick_links {
        font-size: 2.2vw;
    }
}


</style>