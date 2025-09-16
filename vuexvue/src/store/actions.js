export default {
  login(contex) {
    contex.commit("setAuth", { isAuth: true });
  },
  logout(contex) {
    contex.commit("setAuth", { isAuth: false });
  },
};
