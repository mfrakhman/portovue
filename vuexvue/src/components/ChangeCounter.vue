<template>
  <div>
    <button @click="inc">Add 1</button>
    <button @click="add({ value: 11 })">Add 11</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    // ...mapActions(["increment", "addition"]),
    ...mapActions("number", { inc: "increment", add: "addition" }),
    // alternative
    // ...mapActions({
    //   inc: "increment",
    //   add: "addition",
    // }),
    // addOne() {
    //   this.$store.dispatch("increment");
    // },
    minusOne() {
      this.$store.commit("decrement");
    },
  },
};
</script>
