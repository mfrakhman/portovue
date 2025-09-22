<template>
  <div>
    <section>
      <base-card>
        <h2>Register as a Coach</h2>
        <coach-form @save-data="savedData"></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";

export default {
  components: {
    CoachForm,
  },
  methods: {
    savedData(data) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace("/coaches");
    },
  },
};
</script>
