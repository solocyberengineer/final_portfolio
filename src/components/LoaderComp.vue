<template>
    <div class="loaderContainer container-fluid vh-100 bg-dark position-fixed z-3 align-items-center justify-content-center">
        <div class="d-flex align-items-center justify-content-center flex-column">
            <h1 class="loader">MRBUD</h1>
            <div class="spinner"></div>
        </div>
    </div>
    <!-- <div></div> -->
</template>

<script>
export default {
    name: "LoaderComponent"
}
</script>

<style scoped>
.loaderContainer {
    display: flex;
}
.loader {
    font-family: 'Anton', fantasy;
    font-size: 8vw !important;
    background: linear-gradient(70deg, #eee, #303030 50%, #eee);
    background-size: 400%;
    animation-name: loading;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0,0,0,0);
    color: transparent !important;
    background-clip: text;
}
.spinner {
    padding: 1.6vw;
    background-color: transparent;
    border-top: 0.4vw solid white;
    border-right: 0.4vw solid white;
    border-bottom: 0.4vw solid transparent;
    border-left: 0.4vw solid white;
    border-radius: 50%;
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.2,0.4,0.4,0);
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes loading {
    0% {
        background-position: 0% 50%;
        text-shadow: 0 0px 0px transparent;
    }
    50% {
        background-position: 100% 50%;
        text-shadow: 0 0px 10px red;
    }
    100% {
        background-position: 0% 50%;
        text-shadow: 0 0px 0px transparent;

    }
}
</style>