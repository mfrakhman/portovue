export default {
  async login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },
  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTVIhv1jnS5N0i5-Jc572cgO9bZmpU5JQ";
    if (mode === "signup") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTVIhv1jnS5N0i5-Jc572cgO9bZmpU5JQ";
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to authenticate. check your login data."
      );
      throw error;
    }
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  logout(context) {
    context.commit("setUser", {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
};
