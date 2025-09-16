<template>
  <div>
    <h3>Normalize Counter : {{ counter }}</h3>
    <p>We do more...</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      //   return this.$store.getters.normalizeCounter;
      return this.$store.getters["number/normalizeCounter"];
    },
  },
};
</script>
