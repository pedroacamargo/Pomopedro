// variables
let imgstart = document.getElementById("startimg")
let breakTitle = document.getElementById("break")
let resetBtn = document.getElementById("reset")
let workTime = 50 // work tiome is the amount of minutes we will work
let workMinutes = workTime - 1
let seconds = "00"
let myInterval = -1 // -1 == timer is paused


// when open the website
window.onload = () => {
    document.getElementById("minutes").innerHTML = workTime
    document.getElementById("seconds").innerHTML = seconds
}

// start timer
function start() {
    // countdown
    let timerFunction = () => {
        // change the display
        document.getElementById("minutes").innerHTML = workMinutes
        
        if (seconds == 0) {
            workMinutes--
            document.getElementById("minutes").innerHTML = workMinutes
            seconds = 59
            if (workMinutes == -1) {
                workMinutes = workTime
            }
        } else {
            seconds--   
        }

        if (seconds >= 0 && seconds < 10) {
            document.getElementById("seconds").innerHTML = "0" + seconds
        } else {
            document.getElementById("seconds").innerHTML = seconds
        }

    }

    // If paused, start, if started, pause
    if (myInterval == -1) {
        if (seconds == "00") {
            seconds = 60
            myInterval = setInterval(timerFunction, 1000) // 1000 = 1s
            imgstart.src = "../imgs/pauseicon.png"
        } else {
            myInterval = setInterval(timerFunction, 1000) // 1000 = 1s
            imgstart.src = "../imgs/pauseicon.png"
        }
    } else {
        clearInterval(myInterval)
        myInterval = -1
        imgstart.src = "../imgs/playicon.png"
    }
    // each second do this
   
}

function reset() {
    seconds = 59
    workMinutes = workTime - 1
    document.getElementById("seconds").innerHTML = seconds
    document.getElementById("minutes").innerHTML = workTime - 1
}


// ARRANJAR ALGUMA FORMA DE PAUSAR NO MESMO BOTAO