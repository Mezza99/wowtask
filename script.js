// Funzione di login
function login() {
    var password = document.getElementById("password").value;

    // Controlla se la password è corretta
    if (password === "lnm20") {
        // Reindirizza all'app To-Do List
        window.location.href = "todo.html";
    } else {
        alert("Password incorrect. Please try again.");
    }
}

// Funzione di logout
function logout() {
    // Reindirizza alla pagina di login
    window.location.href = "index.html";
}

// Funzione per caricare i task salvati nel local storage
function loadTasks() {
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        var taskList = document.getElementById("taskList");
        taskList.innerHTML = savedTasks;
    }
}

// Funzione per salvare i task nel local storage
function saveTasks() {
    var taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", taskList);
}

// Funzione per aggiungere un task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = taskInput.value;

    if (task.trim() !== "") {
        // Crea un nuovo elemento di lista
        var listItem = document.createElement("li");
        listItem.className = "taskItem";
        listItem.textContent = task;

        // Aggiungi un pulsante di eliminazione
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.className = "deleteTaskBtn";
        deleteButton.onclick = function() {
            if (confirm("Are you sure you want to delete this task?")) {
                deleteTask(listItem);
            }
        };
        listItem.appendChild(deleteButton);

        // Aggiungi il task alla lista visiva
        taskList.appendChild(listItem);

        // Resetta il campo di input
        taskInput.value = "";

        // Salva i task nel local storage
        saveTasks();
    }
}

// Funzione per eliminare un task
function deleteTask(taskItem) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(taskItem);

    // Salva i task nel local storage
    saveTasks();
}

// Funzione per completare un task
function completeTask(taskItem) {
    var completedList = document.getElementById("completedList");
    completedList.appendChild(taskItem);

    // Rimuovi il pulsante di completamento
    taskItem.removeChild(taskItem.getElementsByClassName("completeTaskBtn")[0]);

    // Salva i task nel local storage
    saveTasks();
}

// Carica i task salvati al caricamento della pagina
window.onload = function() {
    loadTasks();
};
