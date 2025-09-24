<template>
  <div>
    <the-header></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
  watch: {
    didAutoLogout(curVal, oldVal) {
      if (curVal && curVal !== oldVal) {
        this.$router.replace("/coaches");
      }
    },
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

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
