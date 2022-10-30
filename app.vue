<template>
  <div class="bg-white">
    <div class="text-black" id="nav-end">
      <nav
        id="nav"
        class="fixed inset-x-0 top-0 flex flex-row justify-between z-10 dark:text-white text-gray-400 bg-transparent dark:bg-slate-800"
      >
        <div class="p-4">
          <div class="font-extrabold tracking-widest text-xl flex flex-row">
            <a href="#" class="transition duration-500 hover:text-indigo-500">
              <img src="./assets/img/saf.png" alt="" class="h-16 w-16" />
            </a>
            <button class="">
              <ToggleMode />
            </button>
          </div>
        </div>

        <!-- Nav Items Working on Tablet & Bigger Sceen -->
        <div class="p-4 hidden md:flex flex-row justify-between font-bold">
          <!-- <nuxt-link
            to="#"
            id="hide-after-click"
            class="mx-4 text-lg border-b border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
            >Docs</nuxt-link
          > -->
          <nuxt-link
            to="/Backend"
            class="mx-4 text-lg border-b border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
            >Backend(node.js)</nuxt-link
          >
          <nuxt-link
            to="/Frontend"
            class="mx-4 text-lg border-b border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
            >Frontend(nuxt3.js)</nuxt-link
          >
        </div>

        <!-- Burger Nav Button on Mobile -->
        <div id="nav-open" class="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </nav>

      <!-- Opened Nav in Mobile, you can use javascript/jQuery -->
      <div
        id="nav-opened"
        class="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10"
      >
        <div class="p-2 divide-y divide-gray-600 flex flex-col">
          <!--   <nuxt-link to="" class="p-2 font-semibold hover:text-indigo-700">Docs</nuxt-link> -->
          <nuxt-link to="/Backend" class="p-2 font-semibold hover:text-indigo-700"
            >Backend(nodejs)</nuxt-link
          >
          <nuxt-link to="/Fronted" class="p-2 font-semibold hover:text-indigo-700"
            >Fontend(Nuxt3.js)</nuxt-link
          >
        </div>
      </div>

      <!-- Overlay Background + Center Control -->
      <div
        class="h-screen bg-opacity-50 bg-black flex items-center justify-center"
        style="background: rgba(0, 0, 0, 0.5)"
      >
        <div class="mx-2 text-center">
          <h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
            <span class="text-white">Right</span> Place To
          </h1>
          <h2
            class="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight"
          >
            Get a <span class="text-pink-600">Better</span> and
            <span class="text-pink-600">Professionals</span> docs
          </h2>
        </div>
      </div>
    </div>
    <NuxtPage />
    <Footer />
  </div>
</template>
<script>
import ToggleMode from "./components/toggleMode.vue";
import Footer from "./components/footer.vue";
export default {
  components: { ToggleMode, Footer },
};
</script>
<style>
#nav-end {
  background: url("https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
}
</style>
