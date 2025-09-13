<template>
  <div>
    <button @click="confirmInput()">confirm</button>
    <button @click="savedChanges">Save Changes</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from "../components/users/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      this.$router.push("/teams");
    },
    savedChanges() {
      this.savedChanges = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("user list before enter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("User List before Route Leave");
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userLeave = confirm("are you sure to leave?");
      next(userLeave);
    }
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
