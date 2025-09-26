<template>
  <div>
    <section class="container">
      <h2>{{ userName }}</h2>
      <h2>{{ userAge }}</h2>
    </section>
    <!-- <section class="container">
      <h2>{{ anotherName }}</h2>
      <h2>{{ anotherAge }}</h2>
    </section>
    <section class="container">
      <h2>{{ user.name }}</h2>
      <h2>{{ user.age }}</h2>
      <button @click="setUser('kovan', 26)">Change Name and Age</button>
    </section> -->
    <section class="container">
      <!-- <input type="text" placeholder="firstName" @input="setFirstName" />
      <input type="text" placeholder="lastName" @input="setLastName" /> -->
      <input type="text" placeholder="firstName" v-model="firstName" />
      <input type="text" placeholder="lastName" v-model="lastName" />
      <button @click="setAge(26)">Change age</button>
    </section>
  </div>
</template>

<script>
import {
  computed,
  watch,
  // reactive,
  ref,
  // toRefs
} from "vue";

export default {
  setup() {
    //data()
    const firstName = ref("");
    const lastName = ref("");
    const userAge = ref(0);

    // function updateUser(name, age) {
    //   (user.name = name), (user.age = age);
    // }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }
    function setLastName(event) {
      lastName.value = event.target.value;
    }

    //methods
    function setAge(age) {
      userAge.value = age;
    }

    //computed
    const userName = computed(function () {
      return firstName.value + " " + lastName.value;
    });

    //watcher
    watch([userAge, userName], function (newVal, oldVal) {
      console.log("Old Age: " + oldVal[0]);
      console.log("New Age: " + newVal[0]);
      console.log("Old Name: " + oldVal[1]);
      console.log("New Name: " + newVal[1]);
    });

    return {
      userName,
      userAge,
      setAge,
      firstName,
      lastName,
      setFirstName,
      setLastName,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
