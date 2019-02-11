// Create a class called StopWatch.
class StopWatch
{
    
    constructor() {
        
       /* this.start = start;
        this.stop = stop;
        this.reset = reset;
        */
   
        this.start = document.getElementById("start");
        this.stop = document.getElementById("stop");
        this.reset = document.getElementById("reset");

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.pad = this.pad.bind(this);
        
        //this.interval = this.interval.bind(this);
        this.interval = null;
        this.incrementTimer = null;

        /*this.start.onclick = this.startTimer;
        this.stop.onclick = this.stopTimer;
        this.reset.onclick = this.resetTimer;
        */

        this.start.addEventListener("click",this.startTimer.bind(this));
        this.stop.addEventListener("click",this.stopTimer.bind(this));
        this.reset.addEventListener("click",this.resetTimer.bind(this));
       
        
       
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
        console.log(this);
        if(!this.isRunning){
            this.isRunning=true;     

           // this.interval = setInterval(this.incrementTimer, 1000);
            this.interval = setInterval( () => {
                console.log("starting the timer");
                console.log( this);
                this.incrementTimer();
            }, 1000);
        }


        // if the timer is NOT running, start it
        // call the function incrementTimer every second
        // save the timer in a the timer variable
      //  console.log("start");
    }

    incrementTimer() {
        console.log("kuygkuygkuyg " +this);
        // increment the second
        // calculate the number of minutes and seconds
        
        console.log(this.second);
        this.second++;
        this.minute = Math.floor(this.minute/60);
        this.second = this.second%60

    
    

        document.getElementById("minutes").innerHTML = this.pad(this.second);
        document.getElementById("seconds").innerHTML = this.pad(this.minute);
    
    
    }

    pad(number) {
        // add a leading 0 if the number is < 10
    

            if(number<10){
                return "0" + number;
            }
            return number;
        
        
        }

    stopTimer() {
        this.clearInterval(this.interval);
        // this.interval.clearInterval();
        this.isRunning= false;
        
        // if the timer is running, stop it
      console.log("Stop");
    }


    resetTimer() {
        // stop the timer
        this.stopTimer();
        this.second = 0;
        this.minute=0;

        this.second.innerHTML = "01";
        this.minute.innerHTML = "00";
        // set the second back to 0
        
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



window.onload = function(){
    console.log("ON")
    let stopWatch = new StopWatch()
    };

// Create a variable called stopWatch

// Add an event handler to the load event of the window. 
// Use an anonymous function or an arrow function to
// set the stopWatch variable to an instance of StopWatch