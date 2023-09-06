const timeLeft=document.querySelector("#time-left")
const resultDisplay=document.querySelector("#result")
const startPauseButton=document.querySelector("#start-pause-button")
const squares=document.querySelectorAll(".grid div")
const logsLeft=document.querySelectorAll(".log-left")
const logsRight=document.querySelectorAll(".log-right")
const carsLeft=document.querySelectorAll(".car-left")
const carsRight=document.querySelectorAll(".car-right")

let Cidx=76
let timerId1=null
let timerId2=null
let timerId3=null
let currentTime=20

timerId3=setInterval(seeTime,1000)

function seeTime(){
    currentTime--
    timeLeft.innerHTML=currentTime
}

function moveFrog(e){
    switch(e.key){
        case 'ArrowLeft':
            if(Cidx>=1&&Cidx%9!=0){
            squares[Cidx].classList.remove("frog")
            Cidx-=1
            }
            break;
        case 'ArrowRight':
            if(Cidx<80&&(Cidx+1)%9!=0){
            squares[Cidx].classList.remove("frog")
            Cidx+=1
            }
            break;
        case 'ArrowUp':
            if(Cidx-9>=0){
            squares[Cidx].classList.remove("frog")
            Cidx-=9
            }
            break;
        case 'ArrowDown':
            if(Cidx+9<=80){
                squares[Cidx].classList.remove("frog")
                Cidx+=9
                }
            break;
    }
    console.log(Cidx)
    squares[Cidx].classList.add("frog")
}
document.addEventListener("keyup", moveFrog)

function autoMoveLogs(){
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
    Lose()
    Win()
}
timerId1=setInterval(autoMoveLogs, 1000)

function moveLogRight(logRight) {
    switch(true){
        case logRight.classList.contains("l5"):
            logRight.classList.remove("l5")
            logRight.classList.add("l4")
            break
        case logRight.classList.contains("l4"):
            logRight.classList.remove("l4")
            logRight.classList.add("l3")
            break
        case logRight.classList.contains("l3"):
            logRight.classList.remove("l3")
            logRight.classList.add("l2")
            break
        case logRight.classList.contains("l2"):
            logRight.classList.remove("l2")
            logRight.classList.add("l1")
            break
        case logRight.classList.contains("l1"):
            logRight.classList.remove("l1")
            logRight.classList.add("l5")
            break
    }
}

function moveLogLeft(logLeft) {
    switch(true){
        case logLeft.classList.contains("l1"):
            logLeft.classList.remove("l1")
            logLeft.classList.add("l2")
            break
        case logLeft.classList.contains("l2"):
            logLeft.classList.remove("l2")
            logLeft.classList.add("l3")
            break
        case logLeft.classList.contains("l3"):
            logLeft.classList.remove("l3")
            logLeft.classList.add("l4")
            break
        case logLeft.classList.contains("l4"):
            logLeft.classList.remove("l4")
            logLeft.classList.add("l5")
            break
        case logLeft.classList.contains("l5"):
            logLeft.classList.remove("l5")
            logLeft.classList.add("l1")
            break
    }
}


function autoMoveCars(){
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))
    carsRight.forEach(carRight => moveCarRight(carRight))
    Lose()
    Win()
}
timerId2=setInterval(autoMoveCars, 1000)

function moveCarRight(carRight) {
    switch(true){
        case carRight.classList.contains("c3"):
            carRight.classList.remove("c3")
            carRight.classList.add("c2")
            break
        case carRight.classList.contains("c2"):
            carRight.classList.remove("c2")
            carRight.classList.add("c1")
            break
        case carRight.classList.contains("c1"):
            carRight.classList.remove("c1")
            carRight.classList.add("c3")
            break
    }
}

function moveCarLeft(carLeft) {
    switch(true){
        case carLeft.classList.contains("c1"):
            carLeft.classList.remove("c1")
            carLeft.classList.add("c2")
            break
        case carLeft.classList.contains("c2"):
            carLeft.classList.remove("c2")
            carLeft.classList.add("c3")
            break
        case carLeft.classList.contains("c3"):
            carLeft.classList.remove("c3")
            carLeft.classList.add("c1")
            break
    }
}

function Lose(){
    if(squares[Cidx].classList.contains("c1")||currentTime<=0){
        resultDisplay.innerHTML="GAME OVER!!!"
        clearInterval(timerId1)
        clearInterval(timerId2)
        clearInterval(timerId3)
        squares[Cidx].classList.remove("frog")
        document.removeEventListener("keyup",moveFrog)
    }
    if(squares[Cidx].classList.contains("l4")||squares[Cidx].classList.contains("l5")){
        resultDisplay.innerHTML="GAME OVER!!!"
        clearInterval(timerId1)
        clearInterval(timerId2)
        clearInterval(timerId3)
        squares[Cidx].classList.remove("frog")
        document.removeEventListener("keyup",moveFrog)
    }
}

function Win(){
    if(squares[Cidx].classList.contains("ending-block")){
        resultDisplay.innerHTML="YOU WIN!!!"
        clearInterval(timerId1)
        clearInterval(timerId2)
        clearInterval(timerId3)
        document.removeEventListener("keyup",moveFrog)
    }
}

