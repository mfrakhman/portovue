<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

body {
  margin: 0;
}
* {
  box-sizing: border-box;
}

html {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
