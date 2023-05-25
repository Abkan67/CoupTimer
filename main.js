const number = document.getElementById("number")
const responseButton = document.getElementById("responseButton");
const newTurnButton = document.getElementById("newTurnButton")
const addDescisionButton = document.getElementById("addDescisionButton")
let timeLeft = 8.0;


setInterval(reduceTime, 100);
function reduceTime() {
  timeLeft=timeLeft - 0.1;
  number.innerHTML=Math.floor(timeLeft*10)/10;
}




responseButton.addEventListener("click", response);
newTurnButton.addEventListener("click", newTurn);
addDescisionButton.addEventListener("click", addDescision);
window.addEventListener("keydown", changeClock);

function changeClock(event) {
  if(event.key == ' '){newTurn();}
  if(event.key == 'r'){response();}
  if(event.key == 'd'){addDescision();}
}

function newTurn() {timeLeft=8.1;}
function response() {timeLeft=4.2;}
function addDescision() {timeLeft+=3;}
