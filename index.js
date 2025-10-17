// hoome score function
// first container

let score = 0;
let foul = 0;
let gScore = 0;
let gFoul = 0;
let period = 0;
let seconds = 0;
let minutes = 0;
let timerInterval;


const homeScore = document.getElementById('home-score');
const hFoul = document.getElementById('1stTFoul');
const guestScore = document.getElementById('guest-score')
guestScore.textContent = gScore;
const guestFoul = document.getElementById('guestFoul');
const periodD = document.getElementById('periodD');
const timeDisplay = document.getElementById('time');



homeScore.textContent = score;



function addOne() {
  
  score += 1;
  homeScore.textContent = score;
 return homeScore;

}
function addTwo(){
  score += 2;
  homeScore.textContent = score;
  return homeScore;
}
function addThree(){
  score += 3;
  homeScore.textContent = score;
  return homeScore;
}
function addFirstFoul(){
  foul++
  hFoul.textContent = foul;
  return hFoul;

}
function minusFirstFoul(){

  if(foul > 0){
    foul--;
  }
  hFoul.textContent = foul;
  return hFoul;
}

// Guest score function
//second container





function addOneGuest() {
  
  gScore += 1;
  guestScore.textContent = gScore;
  return guestScore;
 

}
function addTwoGuest(){
  gScore += 2;
  guestScore.textContent = gScore;
  return guestScore;

}
function addThreeGuest(){
  gScore += 3;
  guestScore.textContent = gScore;
  return guestScore;

}
function addGuestFoul(){
    gFoul++;
    guestFoul.textContent = gFoul;
    return guestFoul;
}
function minusGuestFoul(){
  if(gFoul > 0){
    gFoul--
  }
  guestFoul.textContent = gFoul;
  return guestFoul;

}

// extra feature function
//mid container





function addPeriod(){
  period++;
  periodD.textContent = period;
  return periodD;

}

function minusPeriod(){
    if(period > 0){
      period--;
    }
    periodD.textContent = period;
    return periodD;
}




function updateTimeDisplay() {
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function addTime() {
    seconds ++; // Adds 30 seconds
    if (seconds >= 60) {
        minutes++;
        seconds -= 60;
    }
    return updateTimeDisplay();
  
    
}

function minusTime() {
    if(seconds > 0){
      seconds --;
    }else if (minutes > 0 ) {
      minutes--;
      seconds = 59;   
    }
return updateTimeDisplay();
  
  }

function startTime() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                stopTime();
            }
            return updateTimeDisplay();
        }, 1000);
    }
    
    ;
}

function pauseTime() {
    clearInterval(timerInterval);
    timerInterval = null;
    return timerInterval;
}

function stopTime() {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    minutes = 0;
    updateTimeDisplay();
    return timeDisplay.textContent;
}

function newGame(){
  
 
const home_Score = homeScore.textContent = score;
const homeFoul =  hFoul.textContent = foul;
 const periodDisplay = periodD.textContent = period;
 const guest_Score = guestScore.textContent = gScore;
 const guest_Foul = guestFoul.textContent = gFoul;

 if(home_Score > guest_Score){
  alert(`Home Win! \nScore:\nHome ${home_Score}\nGuest:${guest_Score} `)
  score = 0;
  homeScore.textContent = score;
  foul = 0;
  hFoul.textContent = foul;
  gScore = 0;
  guestScore.textContent = gScore;
  gFoul = 0;
  guestFoul.textContent = gFoul;
  period = 0; 
  periodD.textContent = period;


  
  

 }else {
  alert(`Guest Win\n Score:\nHome ${home_Score}\nGuest:${guest_Score} `)
  score = 0;
  foul = 0;
  gScore = 0;
  gFoul = 0;
  period = 0;
  homeScore.textContent = score;
  hFoul.textContent = foul;
  periodD.textContent = period;
  guestScore.textContent = gScore;
  guestFoul.textContent = gFoul;
  
  
 }




}