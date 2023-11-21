function showLoginForm() {
    var loginForm = document.getElementById("loginForm");
    var welcomeMessage = document.getElementById("welcomeMessage");

    loginForm.style.display = "block";
    welcomeMessage.style.display = "none";
}

function showWelcomeMessage() {
    var loginForm = document.getElementById("loginForm");
    var welcomeMessage = document.getElementById("welcomeMessage");

    loginForm.style.display = "none";
    welcomeMessage.style.display = "block";
}

function login(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "leo.kaique@hotmail.com" && password === "leo123") {
        alert("Login bem-sucedido!");
        showWelcomeMessage();
    } else {
        alert("Login falhou. Verifique seu usuário e senha.");
    }
}
