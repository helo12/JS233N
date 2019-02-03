// Create a class called StopWatch.
class StopWatch
{
    constructor(start, stop, reset, minutes, seconds) {
        this.start = start;
        this.stop = stop;
        this.reset = reset;
        this.minutes = document.getElementById(minutes);
        this.seconds = document.getElementById(seconds);

        this.start = document.getElementById("start");
        this.stop = document.getElementById("stop");
        this.reset = document.getElementById("reset");

        this.start.addEventListener("click",startTimer);
        this.stop.addEventListener("click",stopTimer);
        this.reset.addEventListener("click",resetTimer);
       
        this.start.onclick = this.startTimer.bind(this);
        this.stop.onclick = this.stopTimer.bind(this);
        this.reset.onclick = this.resetTimer.bind(this);
    }
    /*
      

        Add a constructor.  In the body of the constructor
        -   Create instance variables for these 3 variables as well
            as all of the elements on the page that you're going to
            refer to in code
        -   All of the functionality of init will happen in the constructor.
        -   Add the event handlers for the start, stop and reset buttons.
            You'll have to bind(this) to each function because the keyword
            this will refer to the button (not the class) when the 
            event fires
            -- this.startButton.onclick = this.startTimer.bind(this);
    */
    startTimer() {
    if(this.isRunning == false){
        this.isRunning=true;
        this.interval = setInterval("incrementTimer()", 1000);
       
    }
 
    this.timer= this.timerTime;
    // if the timer is NOT running, start it
    // call the function incrementTimer every second
    // save the timer in a the timer variable
console.log("start");
}

 incrementTimer() {
    // increment the timerTime
    // calculate the number of minutes and seconds
    
    this.timerTime++;


    this.second.innerHTML = pad(timerTime);
    this.minutes.innerHTML = pad(x);
    if( this.timerTime > 60){
        
        this.second.innerHTML = 0;
        this.timerTime=0;
        this.x++;
        this.minutes.innerHTML = x;
      
    }
  
}

 pad(number) {
    // add a leading 0 if the number is < 10
   

    if(timerTime<10){
        this.second.innerHTML = "0" +timerTime;
    }
    else{
        this.second.innerHTML = timerTime;
    }
    if(x<10){
        return "0" +  this.x;
    }
    else{
        return  this.x;
    }
  
}

 stopTimer() {
    this.clearInterval(interval);
    this.isRunning= false;
    
    // if the timer is running, stop it
console.log("Stop");
}


resetTimer() {
    // stop the timer
    this.stopTimer();
    this.timerTime = 0;
    this.x=0;

    this.second.innerHTML = "01";
    this.minute.innerHTML = "00";
    // set the timerTime back to 0
    
    // write 00 to the elements on the page for minutes and seconds
console.log("reset");
}

    /*
        Convert each function to a method.  
        -   Move it inside the class.
        -   Remove the keyword function
        -   Add this. in front of every variable and method
    */
}
var stopWatch;
stopWatch = new StopWatch()

// Create a variable called stopWatch

// Add an event handler to the load event of the window. 
// Use an anonymous function or an arrow function to
// set the stopWatch variable to an instance of StopWatch