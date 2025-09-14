<template>
  <div>
    <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <transition name="para">
        <p v-if="paragraphIsVisible">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          provident neque, praesentium consequatur aliquid veniam ex, incidunt
          non repellat, repudiandae blanditiis? Ullam voluptatem, nobis
          aspernatur accusantium tempora cumque sunt provident!
        </p>
      </transition>
      <button @click="showParagraph">Toggle Paragraph</button>
    </div>
    <base-modal
      @close="hideDialog"
      :open="dialogIsVisible"
    >
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paragraphIsVisible: false,
    };
  },
  methods: {
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
.fadein {
  animation: fade-in 2s ease-out forwards;
}
.para-enter-from {
  /* opacity: 0;
  transform: translateY(-50px); */
}
.para-enter-active {
  animation: fade-in 0.5s ease-out;
}
.para-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}
.para-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}
.para-leave-active {
  animation: fade-out 0.5s ease-in;
}
.para-leave-to {
  /* opacity: 0;
  transform: translateY(-50px); */
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
