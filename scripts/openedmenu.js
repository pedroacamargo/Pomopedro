let settings = document.getElementById("settings-opacity")
let menuClicks = 0
let workTimeMenuData = document.getElementById("timer-minutes")

function closeSettings() {
    settings.style.display = "none"
}

function openSettings() {
    settings.style.display = "flex"
}

function changeTimerData() {
    workTime = workTimeMenuData.value
    workMinutes = workTime - 1
    seconds = "00"
    document.getElementById("minutes").innerHTML = workTime
    document.getElementById("seconds").innerHTML = "00"
    settings.style.display = "none"
}