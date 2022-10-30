<template>
  <main class="dark:bg-slate-900 bg-gray-200">
    <NuxtPage />
    <BoutMeVue />
    <Footer />
  </main>
</template>
<script>
import Footer from "./components/footer.vue";
import BoutMeVue from "./components/BoutMe.vue";
export default {
  components: { Footer, BoutMeVue },
  watch: {
    $route() {
      location.reload();
    },
  },
};
</script>
<style>
#nav-end {
  background: url("https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
}
</style>
