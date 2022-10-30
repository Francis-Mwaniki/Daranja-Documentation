<template>
  <div
    class="dark:bg-slate-900 bg-transparent dark:text-white text-gray-600 text-center p-2 flex flex-row justify-center items-center"
  >
    &COPY;Copyright 2022. franc_pro <span><ToggleMode /></span>
  </div>
</template>

<script>
import ToggleMode from "~/components/toggleMode.vue";
export default {
  components: {
    ToggleMode,
  },
};
</script>

<style></style>
