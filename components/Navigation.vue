<template>
  <div class="text-black" id="nav-end">
    <nav
      id="nav"
      class="fixed inset-x-0 top-0 flex flex-row justify-between z-10 dark:text-white text-gray-400 bg-slate-50 dark:bg-slate-800"
    >
      <div class="p-4">
        <div
          class="font-extrabold tracking-widest text-xl flex flex-row justify-center items-center gap-x-3"
        >
          <a href="#" class="transition duration-500 hover:text-indigo-500">
            <img src="../assets/img/saf.png" alt="" class="h-16 w-16" />
          </a>
        </div>
      </div>

      <!-- Nav Items Working on Tablet & Bigger Sceen -->

      <!-- Burger Nav Button on Mobile -->
      <div id="nav-open" class="p-4">
        <strong
          ><h1
            class="dark:text-white md:text-3xl text-xl py-3 border-b-2 border-dotted dark:border-pink-600 border-black text-gray-600 font-extrabold leading-7 tracking-wider"
          >
            MPESA API GUIDE
          </h1></strong
        >
      </div>
    </nav>
    <div
      class="flex justify-center items-center mx-auto fixed z-20 top-16 left-3 gap-x-3"
    >
      <strong
        ><nuxt-link to="/front" class="underline italic text-black dark:text-white"
          >frontend</nuxt-link
        ></strong
      >
      <strong
        ><nuxt-link to="/" class="underline italic text-black dark:text-white"
          >Backend</nuxt-link
        ></strong
      >
    </div>

    <!-- Opened Nav in Mobile, you can use javascript/jQuery -->
    <div
      id="nav-opened"
      class="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10"
    >
      <div class="p-2 divide-y divide-gray-600 flex flex-col"></div>
    </div>

    <!-- Overlay Background + Center Control -->
    <div
      class="h-screen bg-opacity-50 bg-black flex items-center justify-center"
      style="background: rgba(0, 0, 0, 0.5)"
    >
      <div class="mx-2 text-center">
        <h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
          <mark><span class="text-indigo-600">MPESA</span></mark>
          <mark> <span class="text-indigo-600"> API</span></mark>
        </h1>
        <h2
          class="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight"
        >
          SIMPLE <span class="text-pink-600">GUIDE</span> ON HOW
          <span class="text-pink-600">TO ADD</span> API TO YOUR WEB.
        </h2>
      </div>
    </div>
  </div>
</template>

<style></style>
