// written on pure js..(Vanilla)

let currentSeconds=0;

let timer=0;

function resetTimer(){

    // hide the warning element
    document.querySelector(".timertext").style.display="none";

    // clear the previous interval
    clearInterval(timer);

    // reset the seconds of the timer 
    currentSeconds=0;

    // set a new interval
    timer=setInterval(startIdleTimer, 1000);

    // if these events occur, reset the timer
    window.onload=resetTimer;
    window.onmousemove=resetTimer;
    window.onclick=resetTimer;
    window.onkeypress=resetTimer;
    window.onmousedown-resetTimer;
    window.ontouchstart=resetTimer;
    window.onkeydown=resetTimer;

    // function to countdown time when page is idle
    function startIdleTimer(){

        // increment the timer seconds
        currentSeconds++;

        // set the timertext to the new value
        document.querySelector("#idle").textContent=currentSeconds;

        // display the warning
        document.querySelector(".timertext").style.display="block";

        if(currentSeconds==5){

            let warningtimer=0;

            // time to warn the user
            let countdown=5;

            warningtimer=setInterval(warnMe,1000);

            function warnMe(){

                countdown=countdown-1;

                document.querySelector("#warning").textContent=countdown;

                // display the warning
                document.querySelector(".warningtext").style.display="block";

                if(document==0){

                    // do whatever you will after the warning time expires
                }
            }

        }
    }
}

resetTimer();