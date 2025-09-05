<template>
  <section>
    <header>
      <h2>Hello Friends</h2>
    </header>
    <ul>
      <!-- <friend-contact
        friendName="Fajar Rakhman"
        phone="0821XXXX"
        emailAddress="rrrfajar1@gmail.com"
      ></friend-contact>
      <friend-contact
        friendName="Rizky Ramadhan"
        phone="082177343680"
        emailAddress="ramarizdev@gmail.com"
      ></friend-contact>
      <friend-contact
        friendName=" Ichvandi Oktamaulana"
        phone="082177343681"
        emailAddress="vandoc@gmail.com"
      ></friend-contact> -->
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :friend-name="friend.name"
        :phone="friend.phoneNumber"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
      />
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "fajar",
          name: "Fajar Rakhman",
          phoneNumber: "082177343679",
          email: "rrrfajar1@gmail.com",
          isFavorite: false,
        },
        {
          id: "rizky",
          name: "Rizky Ramadhan",
          phoneNumber: "082177343680",
          email: "ramarizdev@gmail.com",
          //   isFavorite: "0",
        },
        {
          id: "kovan",
          name: "Ichvandi Oktamaulana",
          phoneNumber: "082177343681",
          email: "vandoc@gmail.com",
          //   isFavorite: "0",
        },
        {
          id: "Isan",
          name: "Achmad Ichsan",
          phoneNumber: "082177343682",
          email: "isanon@gmail.com",
          //   isFavorite: "0",
        },
      ],
    };
  },
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
