/*
    Create 3 global variables, isRunning, timer and timerTime.
    Initialize them to false, null and 0 respectively.
*/
var isRunning = false;
var timer;
var timerTime;

var second;
var minute;
var interval;
var x=0;
function init()
{
    // Put the element on the page with an id of start in a variable
    // Do the same for the stop button and the reset button
 var start = document.getElementById("start");
 var stop = document.getElementById("stop");
 var reset = document.getElementById("reset");

second=document.getElementById("seconds");
minute =document.getElementById("minute");
   
 start.addEventListener("click",startTimer);
 stop.addEventListener("click",stopTimer);
 reset.addEventListener("click",resetTimer);

 timerTime = 0;

    // Add an onclick handler to each of the buttons
    // Use the functions startTimer, stopTimer and resetTimer 
    
}

function startTimer() {
    if(isRunning == false){
        isRunning=true;
        interval = setInterval("incrementTimer()", 1000);
       
    }
    second=document.getElementById("seconds");
    minute=document.getElementById("minute");

  //  interval = setInterval("incrementTimer()", 1000);
 
    timer= timerTime;
    // if the timer is NOT running, start it
    // call the function incrementTimer every second
    // save the timer in a the timer variable
console.log("start");
}

function incrementTimer() {
    // increment the timerTime
    // calculate the number of minutes and seconds
    
    timerTime++;
   
    second=document.getElementById("seconds");
    minute =document.getElementById("minutes");

    second.innerHTML = pad(timerTime);
    minute.innerHTML = pad(x);
    if(timerTime > 60){
        
        second.innerHTML = 0;
        timerTime=0;
        x++;
        minute.innerHTML = x;
      
    }
  
}


    // write the minutes and seconds to the elements on the page
    // use the function pad to make sure there's a leading 0 if necessary


function pad(number) {
    // add a leading 0 if the number is < 10
    second=document.getElementById("seconds");
    minute =document.getElementById("minutes");

    if(timerTime<10){
      second.innerHTML = "0" +timerTime;
    }
    else{
        second.innerHTML = timerTime;
    }
    if(x<10){
        return "0" + x;
    }
    else{
        return x;
    }
  
}

function stopTimer() {
    clearInterval(interval);
        isRunning= false;
    
    // if the timer is running, stop it
console.log("Stop");
}

function resetTimer() {
    // stop the timer
    stopTimer();
    timerTime = 0;
    x=0;
    second=document.getElementById("seconds");
    minute =document.getElementById("minutes");
    second.innerHTML = "01";
    minute.innerHTML = "00";
    // set the timerTime back to 0
    
    // write 00 to the elements on the page for minutes and seconds
console.log("reset");
}

// When the page has finished loading, call the function init
window.onload = init;




