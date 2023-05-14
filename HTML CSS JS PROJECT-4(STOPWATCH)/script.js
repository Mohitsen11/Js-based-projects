// Variables for buttons and timer

let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');

// Variables for Stop Watch

let seconds = 0;
let minutes = 0;
let hours = 0;

// Create Variable for leading Zeros

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Now create a function which controls timerInterval and timerStatus

let timeInterval = null;
let timeStatus = "stopped";

// Create function for StopWatch 

function stopWatch (){

    seconds++;
    
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        
        if(minutes / 60 === 1){
           minutes=0;
           hours++;
        }
    }
    
    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    }
    else{
        leadingSeconds = seconds;
    }
    
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    }
    else{
        leadingMinutes = minutes;
    }
    
    if(hours < 10){
        leadingHours = "0" + hours.toString();
    }
    else{
        leadingHours = hours;
    }
    
    //now display the timer
    let displayTimer = document.getElementById('timer').innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}


// window.setInterval(stopWatch , 1000);

startStopBtn.addEventListener('click' , function (){

    if(timeStatus === "stopped"){
        timeInterval = window.setInterval(stopWatch , 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timeStatus = "started";
    }

    else{
        window.clearInterval(timeInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timeStatus = "stopped";
    }
});

resetBtn.addEventListener('click' , function (){
    
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours =0;
    
    document.getElementById('timer').innerHTML = "00:00:00";
});