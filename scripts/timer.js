// variables
let body = document.getElementById("body")
let bigTomatoDecoration = document.getElementById("bigtomato-decoration")
let timerContainer = document.getElementById("timer-container")
let focusText = document.getElementById("focus-text")
let imgstart = document.getElementById("startimg")
let breakTitle = document.getElementById("break")
let resetBtn = document.getElementById("reset")
var workTime = 25 // work tiome is the amount of minutes we will work
let workMinutes = workTime - 1
let breakTime = 5
let breakMinutes = breakTime - 1
let seconds = "00"
let myInterval = -1 // -1 == timer is not running
let timerState = "work" // "work" or "break"



// when open the website
window.onload = () => {
    document.getElementById("minutes").innerHTML = workTime
    document.getElementById("seconds").innerHTML = seconds
}

// start timer
function start() {
    // countdown
    let timerFunction = () => {
        
        if (timerState == "work") {
            // change the display
            document.getElementById("minutes").innerHTML = workMinutes
            if (seconds == 0) {
                workMinutes--
                document.getElementById("minutes").innerHTML = workMinutes
                seconds = 59

                // if time end
                if (workMinutes == -1) {
                    workMinutes = workTime - 1
                    document.getElementById("minutes").innerHTML = breakMinutes
                    body.style.backgroundColor = "#12808b"
                    bigTomatoDecoration.style.backgroundColor = "#3eafba"
                    timerContainer.style.backgroundColor = "#00a3b1"
                    focusText.innerText = "Break Time!"
                    timerState = "break"
                    reset()
                }
            } else {
                seconds--   
            }
    
            if (seconds >= 0 && seconds < 10) {
                document.getElementById("seconds").innerHTML = "0" + seconds
            } else {
                document.getElementById("seconds").innerHTML = seconds
            }
        } else if (timerState == "break") {
            document.getElementById("minutes").innerHTML = breakMinutes
            if (seconds == 0) {
                document.getElementById("minutes").innerHTML = breakMinutes
                breakMinutes--
                seconds = 59
                if (breakMinutes == -1) {
                    breakMinutes = breakTime - 1
                    document.getElementById("minutes").innerHTML = workMinutes
                    body.style.backgroundColor = "rgb(186, 73, 73)"
                    bigTomatoDecoration.style.backgroundColor = "#bf1d1d"
                    timerContainer.style.backgroundColor = "rgba(125, 18, 18, 0.305)"
                    focusText.innerText = "Time to focus!"
                    timerState = "work"
                    reset()
                }
            } else if (seconds == "00") {
                breakMinutes = breakTime - 1
            } else {
                seconds--    
            }
    
            if (seconds >= 0 && seconds < 10) {
                document.getElementById("seconds").innerHTML = "0" + seconds
            } else {
                document.getElementById("seconds").innerHTML = seconds
            }
        }


    }

    // If paused, start, if started, pause
    if (myInterval == -1) {
        if (seconds == "00") {
            seconds = 59
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
    breakMinutes = breakTime - 1
    if (timerState == "work") {
        document.getElementById("seconds").innerHTML = seconds
        document.getElementById("minutes").innerHTML = workTime - 1
    } else {
        document.getElementById("seconds").innerHTML = seconds
        document.getElementById("minutes").innerHTML = breakTime - 1        
    }
}
