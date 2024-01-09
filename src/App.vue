<template>
  <LoaderComp :class="{ doneLoading: !loading }" />
  <div>
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
  <FooterComponent :bottom="vh"/>
  <!-- <div ref="cursor" class="cursor"></div> -->
</template>

<script>
import LoaderComp from './components/LoaderComp.vue';
import NavBar from './components/NavigationComp.vue';
import FooterComponent from '@/components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    LoaderComp,
    NavBar,
    FooterComponent,
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    window.onload = () => {
      this.loading = false
    }
  },
  methods: {
  }
}
</script>

<style>
:root {
    --navBar: 8vh;
    --mainContent: 100vh;
    --terminalRGBA: rgba(31, 25, 41, 0.8);
    --terminal: rgb(31, 25, 41);
    /* --terminal: white; */
    --carbon: #303030;
    --col-5: calc( calc(100%/12) * 5);
    --col-7: calc( calc(100%/12) * 7);
}

@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  /* user-select: none; */
  box-sizing: border-box;
}

body {
  /* background: radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url('@/assets/IMG_8235.jpg'); */
  /* background: linear-gradient( 94deg, white var(--col-5), var(--terminalRGBA) calc( var(--col-5) + 2px), var(--terminalRGBA) ), url('@/assets/IMG_8235.jpg');
  background-position: center;
  background-size: cover; */
}

main {
  /* height: minmax( 100vh, 160vh ); */
  height: var(--mainContent);
  /* min-height: 100vh; */
  /* max-hw: ; */
  /* padding-top: var(--navBar); */
  /* overflow: hidden; */
  /* padding-inline: 5%; */
}

.background {
    padding-top: var(--navBar);
}

.disableScroller {
  overflow: hidden;
}

.doneLoading {
  animation-name: doneLoading;
  animation-duration: 4s;
  animation-fill-mode: forwards;
}
*::-webkit-scrollbar {
  display: none;
}

.cursor {
  transition: 1s;
  background-color: black;
  padding: 30px;
  position: absolute;
  transform: translate(-50%, -50%);
  /* top: 50%; */
  border-radius: 50%;
  border: 1px solid black;
}

@keyframes doneLoading {
  0% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  99% {
    display: flex;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
</style>