<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
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
</style>