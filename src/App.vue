<template>
  <LoaderComp :class="{ doneLoading: !loading }" />
  <div @wheel="onWheel">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
  <FooterComponent :bottom="vh"/>
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
      loading: true,
      scroll: {
        bar: 'none',
        overflow: 'hidden'
      },
      vh: -14
    }
  },
  mounted() {
    window.onload = () => {
      this.loading = false
    }
  },
  methods: {
    onWheel(event) {
      if (event.deltaY > 0) {
        this.vh = 0
      } else if (event.deltaY < 0) {
        this.vh = -14
      }
    }

  }
}
</script>

<style>
:root {
    --navBar: 8vh;
    --mainContent: 100vh;
}

@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  user-select: none;
}

body {
  background: white !important;
}

main {
  height: var(--mainContent);
  /* padding-inline: 5%; */
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