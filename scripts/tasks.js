let tasksclicks = 0
let createTask = document.getElementById("createtask")
let addTask = document.getElementById("addtask")
let taskNameInput = document.getElementById("taskname")

function openCreateTask() {
    createTask.style.display = "flex"
    addTask.style.display = "none"
    taskNameInput.autofocus
}