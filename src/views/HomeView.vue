<template>
    <main class="page">
        <div class="container-fluid text-center text-white">
            <h1 class="display-1 fs-1 py-5">Hi, I'm Rezaar <span>An aspiring Fullstack Developer</span></h1>
        </div>
    </main>
</template>

<script>

export default {
    name: "HomePage",
    data(){
        return {
            sceneVisible: false,
            render: null
        }
    },
    components: {
    }
}
</script>

<style scoped>
.display-1 {
    font-family: 'Anton', Arial, Helvetica, sans-serif;
    color: white;
    text-align: center;
}
.display-1 span {
    display: block;
}
</style>