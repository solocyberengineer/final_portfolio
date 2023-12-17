<template>
  <LoaderComp v-if="loading" />
  <div class="vh-100" v-else @wheel="onWheel">
    <NavBar />
    <router-view />
  </div>
  <FooterComponent v-if="displayFooter" :bottom="vh"/>
</template>

<script>
import LoaderComp from './components/LoaderComp.vue';
import NavBar from './components/NavigationComp.vue';
import FooterComponent from './components/FooterComp.vue';

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
      vh: -14
    }
  },
  mounted() {
    // document.onreadystatechange = () => {
    //   if (document.readyState == "complete") {
    //     this.loading = false
    //   }
    // }
    window.onload = () => {
      this.loading = false
    }
    // document.addEventListener('DOMContentLoaded', function(){
    //   alert('ok')
    //   this.loading = false
    // });
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
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  background: black;
}
</style>