let tasksclicks = 0
const createTask = document.getElementById("createtask")
const addTask = document.getElementById("addtask")
const taskNameInput = document.getElementById("taskname")

function openCreateTask() {
    createTask.style.display = "flex"
    addTask.style.display = "none"
}

function submitTask() {
    
}

function cancelTask() {
    createTask.style.display = "none"
    addTask.style.display = "flex"
}