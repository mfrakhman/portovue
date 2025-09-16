<template>
  <h3>Final Counter : {{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // counter() {
    //     return this.$store.getters.finalCounter;
    // },
    // ...mapGetters(["finalCounter"]),
    ...mapGetters("number", ["finalCounter"]),
  },
};
</script>
