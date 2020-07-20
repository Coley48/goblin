function login() {
    if (verify("username", "password")) {
        postA("/API/login", pack(username, password), JumpFunc(getParameter("j")));
    }
}