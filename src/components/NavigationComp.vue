<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid custom-nav position-relative">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span><i class="bi bi-three-dots text-white"></i></span>
            </button>
            <a href="#" class="navbar-brand text-white fs-2 fw-bolder position-absolute top-0">MRBUD</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 me-auto ms-lg-5 py-3">
                    <li class="nav-item">
                        <router-link :class="{ light: light }" class="nav-link fw-light fs-7" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ light: light }" class="nav-link fw-light fs-7"
                            to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ light: light }" class="nav-link fw-light fs-7"
                            to="/projects">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ light: light }" class="nav-link fw-light fs-7"
                            to="/reviews">Reviews</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ light: light }" class="nav-link fw-light fs-7"
                            to="/resume">Resume</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ light: light }" class="nav-link fw-light fs-7"
                            to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    data() {
    },
    computed: {
        light() {
            return this.$store.state.light;
        }
    }
}
</script>

<style>
.light {
    color: rgba(255, 255, 255, 0.8) !important;
}

nav {
    position: absolute !important;
    top: 0;
    background-color: none !important;
    z-index: 2;
    height: var(--navBar);
    padding-inline: 0 !important;
    width: 100%;
    align-items: stretch !important;
}

.navbar {
    padding: 0 !important;
}

.navbar-toggler {
    border: none;
}

.navbar-toggler:focus {
    box-shadow: none !important;
}

.link {
    color: white;
    text-decoration: none;
}

.nav-link {
    padding-inline: 0vw !important;
    margin-inline: 0.6vw !important;
    border-bottom: 1px solid transparent;
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    font-size: 1.1vw;
    border-bottom: 1px solid transparent !important;
    /* text-shadow: 0px 0px 10px black; */
    text-align: center;
    color: white;
}

.navbar-brand {
    /* -webkit-text-stroke: 1px black; */
    color: white;
    right: 0;
    margin-inline: 1% !important;
    margin-block: auto !important;
    padding-block: 0 !important;
}

@media screen and (max-width: 300px) {
    .fs-7 {
        font-size: 0.6vw;
    }

    /* .navbar, */
    .custom-nav {
        background-color: black !important;
        border: 1px solid white;
    }
}

@media screen and (max-width: 991px) {
    .custom-nav {
        background-color: black !important;
        border: 1px solid white;
    }
}
</style>