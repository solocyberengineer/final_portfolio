<template>
    <nav class="navbar navbar-expand-lg bg-body-black navbar-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span><i class="bi bi-three-dots"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Reviews</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Education</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/skills">Skills</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style>
nav {
    position: absolute;
    top: 0;
    /* background-color: rgba(0,0,0,0.2); */
    z-index: 1;
    width: 100%;
}
.link {
    color:white;
    text-decoration: none;
}
.nav-link {
    padding-inline: 0 !important;
    margin-inline: 0.6vw !important;
    border-bottom: 1px solid transparent;
}
.nav-link:focus {
    border-bottom: 1px solid white;
}
</style>