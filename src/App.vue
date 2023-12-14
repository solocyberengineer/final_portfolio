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
* {
  padding: 0;
  margin: 0;
}
</style>
