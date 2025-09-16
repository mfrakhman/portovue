<template>
  <div>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <!-- <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <transition
        :css="false"
        name="para"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
      >
        <p v-if="paragraphIsVisible">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          provident neque, praesentium consequatur aliquid veniam ex, incidunt
          non repellat, repudiandae blanditiis? Ullam voluptatem, nobis
          aspernatur accusantium tempora cumque sunt provident!
        </p>
      </transition>
      <button @click="showParagraph">Toggle Paragraph</button>
    </div>
    <div class="container">
      <transition name="fadeButton" mode="out-in">
        <button v-if="!usersAreVisible" @click="showUsers">Show Users</button>
        <button v-else @click="hideUsers">Hide Users</button>
      </transition>
    </div>
    <div class="container">
      <list-data></list-data>
    </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div> -->
  </div>
</template>

<script>
// import ListData from "./components/ListData.vue";
export default {
  components: {
    // ListData,
  },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("before enter");
      el.style.opacity = 0;
      console.log(el);
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
      console.log(el);
    },
    afterEnter(el) {
      console.log("after enter");
      console.log(el);
    },
    beforeLeave(el) {
      console.log("before leave");
      el.style.opacity = 1;
      console.log(el);
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
      console.log(el);
    },
    afterLeave(el) {
      console.log("after leave");
      console.log(el);
    },
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    showParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.5s ease-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-100px); */
  /* animation: spin 2s; */
  animation: fade-out 2s ease-out;
}
.fadeButton-enter-from,
.fadeButton-leave-to {
  opacity: 1;
}
.fadeButton-enter-active {
  transition: opacity 0.3s ease-out;
}
.fadeButton-leave-active {
  transition: opacity 0.3s ease-in;
}
.fadeButton-enter-to,
.fadeButton-leave-from {
  opacity: 0;
}
.route-enter-active {
  animation: fade-out 1s ease-out;
}
.route-leave-active {
  animation: fade-in 1s ease-in;
}

@keyframes fade-in {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
@keyframes fade-out {
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}

@keyframes spin {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(-100px) rotate(360deg);
  }
}
</style>
