<template>
  <section>
    <header>
      <h2>Add New Friend</h2>
    </header>
    <form @submit.prevent="submitContact">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="enteredName" />
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input type="text" v-model="enteredPhoneNumber" />
      </div>
      <div>
        <label for="email">Email Address:</label>
        <input type="email" v-model="enteredEmail" />
      </div>
      <button>Add Friend</button>
    </form>
  </section>
</template>
<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      enteredName: "",
      enteredPhoneNumber: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitContact() {
      this.$emit(
        "add-friend",
        this.enteredName,
        this.enteredPhoneNumber,
        this.enteredEmail
      );
    },
  },
};
</script>
