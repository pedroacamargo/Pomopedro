let settings = document.getElementById("settings-opacity")
let menuClicks = 0
let workTimeMenuData = document.getElementById("timer-minutes")
let breakTimeMenuData = document.getElementById("break-minutes")
let invalidTimeError = document.getElementById("invalidTimeError")

function closeSettings() {
    settings.style.display = "none"
}

function openSettings() {
    settings.style.display = "flex"
}

function changeTimerData() {
    if (workTimeMenuData.value >= 5 && workTimeMenuData.value <= 180 && breakTimeMenuData.value >= 5 && breakTimeMenuData.value <= 180) {
        workTime = workTimeMenuData.value
        breakTime = breakTimeMenuData.value
        workMinutes = workTime - 1
        breakMinutes = breakTime - 1
        seconds = "00"
        if (timerState == "work") {
            document.getElementById("minutes").innerHTML = workTime
            document.getElementById("seconds").innerHTML = seconds
        } else {
            document.getElementById("minutes").innerHTML = breakTime
            document.getElementById("seconds").innerHTML = seconds
        }
        settings.style.display = "none"
        invalidTimeError.style.display = "none"
    } else {
        invalidTimeError.style.display = "flex"
    }
}