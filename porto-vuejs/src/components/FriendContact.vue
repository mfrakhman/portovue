<template>
  <li>
    <h2>
      {{ friendName }} {{ friendIsFavorite === true ? "(Favorite)" : "" }}
    </h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phone }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  /*Simple version of props without validation
    props: ["friendName", "phone", "emailAddress", "isFavorite"],
    */
  //   Detailed version of props with validation
  props: {
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
      //   validator: value => {
      //     return value === "0" || value === "1";
      //   },
    },
  },

  data() {
    return {
      detailsAreVisible: false,
      //   friend: {
      //     id: "fajar",
      //     name: "Fajar Rakhman",
      //     phoneNumber: "082177343679",
      //     email: "rrrfajar1@gmail.com",
      //   },
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if (this.friendIsFavorite === true) {
        this.friendIsFavorite = false;
      } else {
        this.friendIsFavorite = true;
      }
    },
  },
};
</script>
