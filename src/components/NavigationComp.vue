<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary text-dark">
        <ul>
            <li class="nav-item"><router-link to="/" class="nav-link link">Home</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link link">About</router-link></li>
            <li class="nav-item"><router-link to="/contact" class="nav-link link">Contact</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style>
nav {
    position: fixed;
    top: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 1;
    width: 100%;
}
.link {
    color:white;
    text-decoration: none;
}
</style>