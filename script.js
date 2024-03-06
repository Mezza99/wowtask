// Funzione di login
function login() {
    var password = document.getElementById("password").value;

    // Controlla se la password è corretta
    if (password === "pirate123") {
        // Reindirizza all'app To-Do List
        window.location.href = "todo.html";
    } else {
        alert("Avast! Ye entered the wrong password. Try again, matey!");
    }
}

// Funzione di logout
function logout() {
    // Reindirizza alla pagina di login
    window.location.href = "index.html";
}
