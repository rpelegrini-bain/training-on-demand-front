
var loggedIn = false;

export function initializeStorage() {
    if (localStorage.getItem("LOGGED_IN")) {
        loggedIn = JSON.parse(localStorage.getItem("LOGGED_IN"));
    }
}

export function isLoggedIn() {
    return loggedIn;
}

export function login() {
    loggedIn = true;
    localStorage.setItem("LOGGED_IN", loggedIn);
}

export function logout() {
    loggedIn = false;
    localStorage.removeItem("LOGGED_IN");
}
