<template>
  <div>
    <the-header title="RememberMe"></the-header>
    <the-resource></the-resource>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResource from "./components/learning-resources/TheResource.vue";

export default {
  components: {
    "the-header": TheHeader,
    "the-resource": TheResource,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

html {
  font-family: "Roboto", sans-serif;
}
</style>
