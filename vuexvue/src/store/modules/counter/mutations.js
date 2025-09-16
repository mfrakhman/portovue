export default {
  increment(state) {
    state.counter = state.counter + 1;
  },
  addition(state, payload) {
    console.log(state);
    state.counter = state.counter + payload.value;
  },
  decrement(state) {
    state.counter = state.counter - 1;
  },
};
