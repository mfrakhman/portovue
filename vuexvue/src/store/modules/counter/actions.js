export default {
  increment(context) {
    setTimeout(function () {
      context.commit("increment");
    }, 2000);
  },
  addition(context, payload) {
    console.log(context);
    context.commit("addition", payload);
  },
};
