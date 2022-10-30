<template>
  <Navigation />
  <div
    class="flex flex-col justify-center mx-auto items-center dark:bg-slate-800 bg-slate-200"
  >
    <strong
      ><h1
        class="py-3 border mt-1 dark:border-pink-600 text-blue-100 dark:text-orange-600 rounded-lg p-2 bg-slate-500 dark:bg-transparent flex justify-center items-center mx-auto flex-row gap-x-2 border-l-8 border-blue-800"
      >
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            style="fill: #ffff"
          >
            <path
              d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"
            ></path></svg
        ></span>
        <span>All callback urls uses ngrok api to expose localhost online!!</span>
      </h1></strong
    >
    <strong
      ><h1
        class="dark:text-white md:text-3xl text-xl py-3 border-b-2 border-dotted p-1 dark:border-pink-600 border-black text-gray-600 font-extrabold leading-7 tracking-wider"
      >
        FRONTEND USING VUE3/NUXT
      </h1></strong
    >
    <h2 class="dark:text-white text-gray-600 mt-2 p-1">YOUR UI</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col gap-y-2">
      <strong
        class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500 p-1"
        >Your UI should be atleast like this..</strong
      >
      <img src="../assets/img/frontend/screen.png" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600 p-1">YOUR TEMPLATE</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col gap-y-2">
      <strong
        class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500 p-1"
        >Your ui template code</strong
      >
      <img src="../assets/img/frontend/template.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600 p-1">SCRIPT FUNCTIONS</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col gap-y-2">
      <strong
        class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500 p-1"
        >Initialize Variables to used</strong
      >
      <img src="../assets/img/frontend/variables.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600 p-1">Calling register(get) request</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col gap-y-2">
      <strong
        class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500"
      ></strong>
      <img src="../assets/img/frontend/register.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600">SIMULATION</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col gap-y-2">
      <strong
        class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500 p-1"
        >calling simulate request(get) from safaricom</strong
      >
      <img src="../assets/img/frontend/simulate.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600">PUSHING MPESA STK TO USER</h2>
    <div
      class="flex justify-center items-center mx-auto md:flex-col flex-col gap-y-2 p-2"
    >
      <strong
        class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500 p-1"
        >Sending a post request with user credentials to push stk user will get an alert
        msg.</strong
      >
      <img src="../assets/img/frontend/stk.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600 p-2">
      FINALLY MOUNTING ALL RESPONSE TO THE SCREEN
    </h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col gap-y-2">
      <strong
        class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500 p-1"
        >All notification if successful or cancelled will be mounted to the
        screen!</strong
      >
      <img src="../assets/img/frontend/mobile.png" alt="" />
    </div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>

<style></style>
