var mySound;
var hour = 00;
var min = 00;
var sec = 00;
var msec = 00;
var hourHeading = document.getElementById('hour');
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var interval;

document.getElementById("pause").style.display ="none";
// document.getElementById("laps").style.display ="none";
document.getElementById("resume").style.display ="none";
document.getElementById("reset").style.display = "none";

function timer(){
    msec++;
    if(msec < 10){msecHeading.innerHTML = msec + "0"}
    else{msecHeading.innerHTML = msec;}
    
    if (msec >= 100){
        sec++;
        if(sec<10){secHeading.innerHTML ="0" + sec;
        msec = 00;}
    else{
        secHeading.innerHTML =sec;
        msec = 00;
    }
        
    }
    else if(sec >= 60){
        min++;
        if(min<10){minHeading.innerHTML = "0" + min;
        sec = 00;}
        else{
            minHeading.innerHTML = min;
        sec = 00;
        }
    }
    else if(min >= 60){
        hour++;
        if(hour<10){hourHeading.innerHTML = "0" + hour;
        min = 00;}
        else{
            hourHeading.innerHTML = hour;
        min = 00;
        }
    }
}
function start(){
    interval = setInterval(timer , 10);
    mySound = new sound("sounds/Search Audio - Soundsnap.mp3")
    mySound.play();
    
    document.getElementById("start").style.display = "none";
    document.getElementById("pause").style.display = "inline-block";
    // document.getElementById("laps").style.display = "inline-block";
    document.getElementById("resume").style.display ="none"
}

function pause(){
        clearInterval(interval, 0);
        mySound.stop();
        document.getElementById("pause").style.display= "none";
        // document.getElementById("laps").style.display= "none";
        document.getElementById("resume").style.display= "inline-block"
        document.getElementById("reset").style.display = "inline-block";
}
function resume(){
    document.getElementById("pause").style.display = "none";
    // document.getElementById("laps").style.display = "none"
    document.getElementById("reset").style.display = "none";
    return start();
    
}


// function laps(){
// var a = document.getElementById('laps').style.display = "inline-block"

// }
function reset(){
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourHeading.innerHTML = "00";
    minHeading.innerHTML = "00" ;
    secHeading.innerHTML = "00" ;
    msecHeading.innerHTML = "00";
    clearInterval(interval , 0);
    mySound.stop();
    document.getElementById("reset").style.display = "none";
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("pause").style.display ="none";
    // document.getElementById("laps").style.display ="none";
    document.getElementById("resume").style.display ="none" 
    return interval;
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();  
        
    }
}
