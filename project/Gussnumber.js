let random    = parseInt( Math.random()*30 +1)
console.log(random)
let submit    =document.querySelector("#sub")
let userinput =document.querySelector("#guessfield")
let guss      =document.querySelector(".guesses")
let  attempt  =document.querySelector(".lastResult")
let lowerhigh =document.querySelector(".lowerhigh")
let  result   =document.querySelector(".result")
const p=document.createElement("p")
let prevGuess=[]
let numGuess=1
let playgame=true

if(playgame){
    submit.addEventListener("click",function(e){
    e.preventDefault();
   let guess = parseInt(userinput.value)
   console.log(guess)
    validateguess(guess)
    })
}


function validateguess(guess){
    if(isNaN(guess)){
        alert("enter  a valid  number ")
    }else if(guess<=0){
        alert("enter  a valid  number ")
    }else if(guess>30){
        alert("enter  a valid  number ")
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess()
            displayMessage(`GAME OVER Random number was ${random}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}
function checkGuess(guess){
    if(guess===random){
        displayMessage(`your guess is right `)
        endgame()

    }else if(guess<random){
        displayMessage(`your guess is to low `)
    }else if(guess>random){
        displayMessage(`your guess is to high`)
    }

}
function displayGuess(guess){
 userinput.value=""
 guss.innerHTML +=`${guess}, `
 numGuess++;
 attempt.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
lowerhigh.innerHTML=`<h2>${message} </h2>`
}

function endgame(){
userinput.value=""
userinput.setAttribute("disabled","")
p.classList.add("button")
p.innerHTML=`<h1 id ="newgame">Click Here To Start New Game</h1>`
result.appendChild(p)
playgame=false
newgame()
}

function newgame(){
 let newgame=document.querySelector("#newgame")
 newgame.addEventListener("click",function(e){
   random  = parseInt( Math.random()*30 +1)
 prevGuess=[]
 numGuess=1
 guss.innerHTML=""
 attempt.innerHTML=`${11-numGuess}`
userinput.removeAttribute("disabled");
 result.removeChild(p)
    playgame=true
 })
}