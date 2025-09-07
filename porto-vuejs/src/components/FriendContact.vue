<template>
  <li>
    <h2>{{ friendName }} {{ isFavorite === true ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phone }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('deleteContact', id)">Delete</button>
  </li>
</template>
<script>
export default {
  /*Simple version of props without validation
    props: ["friendName", "phone", "emailAddress", "isFavorite"],
    */
  //   Detailed version of props with validation
  props: {
    id: {
      type: String,
      required: true,
    },
    friendName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  emits: ["toggle-favorite", "deleteContact"],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       // console.warn("Missing id!");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
