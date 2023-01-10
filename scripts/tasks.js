let tasksclicks = 0
let tasksCount = 0
let taskstate = "" // task0, task1, task2, taskN
let workingOn


function selectTask(documentid) {
    const id = documentid.id
    const task = document.getElementById(id)
    const working = document.getElementById("workingon")

    // when select other task, unselected the others
    for (let i = 0; i < tasksCount; i++) {
        let removeLift = document.getElementById("task" + i)
        removeLift.classList.remove("lift")
    }

    // if already selected, unselect the self div
    if (taskstate == id) {
        taskstate = ""
        task.classList.remove("lift")
        working.innerHTML = "Working on:"
        workingOn = ""
        return
    } 
    // if unselected, select
    else if (taskstate != id) {
        taskstate = id
        task.classList.add("lift")
    }

    // working on: 
    for (let i = -1;i < tasksCount; i++) {
        if (taskstate.charAt(taskstate.length - 1) == i) {
            const taskName = document.getElementById("taskname" + i)
            working.innerHTML = "Working on:" + taskName.value
            console.log(i)
            workingOn = taskstate
        } 
    }
    

    console.log(taskstate)
    console.log(id)

}


function openCreateTask() {
    const createTask = document.getElementById("createtask")
    const addTask = document.getElementById("addtask")
    createTask.style.display = "flex"
    addTask.style.display = "none"
}

function submitTask() {
    const inputPomodorosEstimated = document.getElementById("pomodoros-est")
    const errorMessage = document.getElementById("invalidTimeError")
    if (inputPomodorosEstimated.value > 0) {
        const taskName = document.getElementById("taskname")
        const tasksToDo = document.getElementById("tasks-to-do") // returns the place to put the in progress tasks
        const taskNameInput = document.getElementById("taskname").value // returns the value of the task name
        const estimatedPomodoros = Number(document.getElementById("pomodoros-est").value) // returns the number of estimated pomodoros to be done by the user
        
        const taskListContent = document.createElement("div")
        taskListContent.classList.add("tasklist-content")
        taskListContent.id = "task" + tasksCount
        taskListContent.setAttribute("onclick", "selectTask(this)")

        const labelCheckbox = document.createElement("label")
        labelCheckbox.classList.add("checkbox")
        taskListContent.appendChild(labelCheckbox)

        const inputTaskDone = document.createElement("input")
        inputTaskDone.type = "checkbox"
        inputTaskDone.name = "taskdone"
        inputTaskDone.id = "taskdone"
        labelCheckbox.appendChild(inputTaskDone)

        const spanCheckbox = document.createElement("span")
        spanCheckbox.classList.add("spancheckbox")
        labelCheckbox.appendChild(spanCheckbox)
        
        const taskNameActualTask = document.createElement("input")
        taskNameActualTask.classList.add("taskname")
        taskNameActualTask.classList.add("black")
        taskNameActualTask.classList.add("adjust")
        taskNameActualTask.id = "taskname" + tasksCount
        taskNameActualTask.value = taskNameInput
        taskNameActualTask.setAttribute("readonly", "readonly")
        taskListContent.appendChild(taskNameActualTask)

        const pomodorosToDo = document.createElement("div")
        pomodorosToDo.classList.add("pomodoros-to-do")
        taskListContent.appendChild(pomodorosToDo)

        const pomodorosDone = document.createElement("span")
        pomodorosDone.classList.add("pomodorosdone")
        pomodorosDone.id = "pomodorosdone" + tasksCount
        pomodorosDone.innerText = Number(0)
        pomodorosToDo.appendChild(pomodorosDone)

        const pomodorosToDoValue = document.createElement("span")
        pomodorosToDoValue.classList.add("pomodoros-to-do-value")
        pomodorosToDoValue.innerText = "/" + estimatedPomodoros
        pomodorosToDo.appendChild(pomodorosToDoValue)

        tasksToDo.appendChild(taskListContent)
        console.log(taskListContent)

        taskName.value = ''
        inputPomodorosEstimated.value = ''

        const createTask = document.getElementById("createtask")
        const addTask = document.getElementById("addtask")
        createTask.style.display = "none"
        addTask.style.display = "flex"


        //const test = document.getElementById("taskname" + tasksCount)
        //const teste = test.value
        //console.log(teste)
        tasksCount++
        errorMessage.style.display = "none"
    } else {
        errorMessage.style.display = "flex"
    }
    
}

function cancelTask() {
    const createTask = document.getElementById("createtask")
    const addTask = document.getElementById("addtask")
    createTask.style.display = "none"
    addTask.style.display = "flex"
}

function plusOne() {
    let inputValue = document.getElementById("pomodoros-est")
    if (tasksclicks == 0) {
        inputValue.value = 1
        tasksclicks++
    } else {
        inputValue.value++
    }
}

function minusOne() {
    let inputValue = document.getElementById("pomodoros-est")
    const errorMessage = document.getElementById("invalidTimeError")
    if (tasksclicks == 0) {
        inputValue.value = 1
        tasksclicks--
    } else {
        if (inputValue.value >= 1) {
            inputValue.value--
        } else {
            errorMessage.style.display = "flex"
        }
    }
}

