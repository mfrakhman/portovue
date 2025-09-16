export default {
  testAuth(state) {
    return state.isLogin;
  },
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizeCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    } else if (finalCounter > 100) {
      return 100;
    } else {
      return finalCounter;
    }
  },
};
