<template>
  <div class="bg-white">
    <Nav />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
import ToggleMode from "./components/toggleMode.vue";
import Footer from "./components/footer.vue";
export default {
  components: { ToggleMode, Footer, Nav },
};
</script>
<style>
#nav-end {
  background: url("https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
}
</style>
