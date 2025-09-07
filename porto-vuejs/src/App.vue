<template>
  <section>
    <header>
      <h2>Hello Friends</h2>
    </header>
    <new-friend @add-friend="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :friend-name="friend.name"
        :phone="friend.phoneNumber"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-contact="deleteContact"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        {
          id: "fajar",
          name: "Fajar Rakhman",
          phoneNumber: "082177343679",
          email: "rrrfajar1@gmail.com",
          isFavorite: true,
        },
        {
          id: "rizky",
          name: "Rizky Ramadhan",
          phoneNumber: "082177343680",
          email: "ramarizdev@gmail.com",
          isFavorite: false,
        },
        {
          id: "kovan",
          name: "Ichvandi Oktamaulana",
          phoneNumber: "082177343681",
          email: "vandoc@gmail.com",
          isFavorite: false,
        },
        {
          id: "Isan",
          name: "Achmad Ichsan",
          phoneNumber: "082177343682",
          email: "isanon@gmail.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        friend => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
      // alert(identifiedFriend.name + " favorite status changed!");
      console.log(identifiedFriend.isFavorite);
    },
    addContact(name, phoneNumber, email) {
      const newFriend = {
        id: new Date().toISOString(),
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        isFavorite: false,
      };
      this.friends.push(newFriend);
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter(friend => friend.id !== friendId);
    },
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
