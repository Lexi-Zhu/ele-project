export default {
    getToken(state, token) {
        state.token = token;
        window.sessionStorage.setItem("token", token);
    },
    logout(state) {
        state.token = "";
        window.sessionStorage.clear();
    }
};

//# sourceMappingURL=mutations-compiled.js.map