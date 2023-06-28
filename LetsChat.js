function login() {
var username = document.getElementById("Log").value;
localStorage.setItem("Username", username);
window.location = "LetsChat_room.html";
};
