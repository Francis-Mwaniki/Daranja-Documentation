// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],
  css: ["~/assets/css/main.css", "~/assets/css/global.css"],
  //import css
});
