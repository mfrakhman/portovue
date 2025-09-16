<template>
  <div>
    <base-container title="Vuex" v-if="isAuth">
      <!-- <h3>{{ counter }}</h3> -->
      <the-counter></the-counter>
      <favorite-value></favorite-value>
      <button @click="addOne">Add 10</button>
      <change-counter></change-counter>
    </base-container>
    <base-container title="Auth">
      <user-auth></user-auth>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import TheCounter from "./components/TheCounter.vue";
import UserAuth from "./components/UserAuth.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    addOne() {
      // this.$store.commit("addition", { value: 10 });
      // alternative
      // this.$store.commit({
      //   type: "addition",
      //   value: 10,
      // });
      // for actions
      this.$store.dispatch({
        type: "number/increment",
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
