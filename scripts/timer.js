// variables
let breakTitle = document.getElementById("break")
let resetBtn = document.getElementById("reset")

let workTime = 50
let breakTime = 10

let seconds = "00"

// when open the website
window.onload = () => {
    document.getElementById("minutes").innerHTML = workTime
    document.getElementById("seconds").innerHTML = seconds
}

// start timer
function start() {
    seconds = 59
    

    let workMinutes = workTime - 1
    let breakMinute = breakTime - 1


    // countdown
    let timerFunction = () => {
        // change the display
        document.getElementById("minutes").innerHTML = workMinutes
        document.getElementById("seconds").innerHTML = seconds


        seconds--
        if (seconds == 0) {
            seconds = 59
            workMinutes--
            if (workMinutes == -1) {
                workMinutes = workTime
            }
        }

    }
    
    
    // each second do this
    setInterval(timerFunction, 1000) // 1000 = 1s
   
}


// ARRANJAR ALGUMA FORMA DE PAUSAR NO MESMO BOTAO