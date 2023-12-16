<template>
  <NavBar />
  <router-view />
  <FooterComponent :year="2020"/>
</template>

<script>
import NavBar from './components/NavigationComp.vue';
import FooterComponent from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
  background: black;
}
* {
  padding: 0;
  margin: 0;
}
</style>