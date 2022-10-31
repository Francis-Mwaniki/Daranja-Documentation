<template>
  <Navigation />
  <div
    class="flex flex-col justify-center mx-auto items-center dark:bg-slate-800 bg-slate-200"
  >
    <strong
      ><h1
        class="py-3 border mt-1 dark:border-pink-600 m-1 max-w-md text-blue-100 dark:text-orange-600 rounded-lg p-2 bg-slate-500 dark:bg-transparent flex justify-center items-center mx-auto flex-row gap-x-2 border-l-8 border-blue-800"
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
        class="dark:text-white md:text-3xl text-xl py-3 border-b-2 border-dotted dark:border-pink-600 border-black text-gray-600 font-extrabold leading-7 tracking-wider"
      >
        BACKEND USING NODE.JS
      </h1></strong
    >
    <h2 class="dark:text-white text-gray-600 mt-2">Folder structure</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col">
      <strong class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500"
        >Your folder structure</strong
      >
      <img src="../assets/img/folder.png" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600">Package json</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col">
      <strong class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500"
        >Install all packages</strong
      >
      <img src="../assets/img/package.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600">Main Index.js</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col">
      <strong class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500"
        >Main app ->index.js requires.</strong
      >
      <img src="../assets/img/requires.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600">Main Index.js</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col">
      <strong class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500"
        >DB connection and middlewares.</strong
      >
      <img src="../assets/img/dbconnect.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600">Model(phone)</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col">
      <strong class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500"
        >Your model/phoneNumbers.js</strong
      >
      <img src="../assets/img/phone.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600">Model(mpesa messages)</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col">
      <strong class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500"
        >Your model/mpesa.js</strong
      >
      <img src="../assets/img/mpesa.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600">Main Index.js</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col">
      <strong class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500"
        >Get Accesstoken and Send a register url to safaricom.</strong
      >

      <img src="../assets/img/getReq.svg" alt="" />
      <strong class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500"
        >Get Accesstoken thro- middlewares.</strong
      >
      <img src="../assets/img/frontend/acess.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600">Main Index.js</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col">
      <strong class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500"
        >Simulate actions.</strong
      >
      <img src="../assets/img/simulate.svg" alt="" />
    </div>
    <h2 class="dark:text-white text-gray-600">Main Index.js</h2>
    <div class="flex justify-center items-center mx-auto md:flex-col flex-col">
      <strong class="font-thin dark:text-white text-gray-600 border-b-2 border-red-500"
        >Push an stk to the registered User!!.</strong
      >
      <img src="../assets/img/stk.svg" alt="" />
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
