let click = 0


function openmenu() {
    let mainBubble = document.getElementById("mainbubble")
    let bubbleSettings = document.getElementById("settings")
    let bubbleTasks = document.getElementById("tasks")
    let bubbleResume = document.getElementById("resume")
    if (click == 0) {
        mainBubble.classList.remove("hover")
        bubbleSettings.classList.add("opensettings")
        bubbleTasks.classList.add("opentasks")
        bubbleResume.classList.add("openresume")
        click = 1
    } else if (click == 1) {
        mainBubble.classList.add("hover")
        bubbleSettings.classList.remove("opensettings")
        bubbleTasks.classList.remove("opentasks")
        bubbleResume.classList.remove("openresume")
        click = 0
    }
}