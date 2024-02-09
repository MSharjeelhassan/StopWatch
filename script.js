alert("abcd     ")

var hours = 0;
var mins = 0;
var seconds = 0;
var milliseconds = 0;

var hoursDisp = document.getElementById("hoursDisp");
var minsDisp = document.getElementById("minsDisp");
var secondsDisp = document.getElementById('secondsDisp');
var millisecondsDisp =document.getElementById('millisecondsDisp');

// console.log(hoursDisp);

function renderTimer(){
    hoursDisp.innerHTML = hours;
    console.log(hoursDisp)
    console.log(hoursDisp.innerHTML)
    minsDisp.innerHTML = mins;
    secondsDisp.innerHTML=seconds;
    millisecondsDisp.innerHTML = milliseconds;
}
// renderTimer()
var interval;
function startTimer(){
    interval = setInterval(function(){
        milliseconds++;
        if(milliseconds==10){
            milliseconds = 0;
            seconds++;
            if(seconds==60){
                seconds=0;
                mins++;
                if(mins==60){
                    mins=0;
                    hours++;
                }
            }
    
        }
        renderTimer();
    },100);

}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    stopTimer();
    hours=0;
    mins=0;
    seconds=0;
    milliseconds=0;
    renderTimer();
}



// Class student codeq
// var hour = 0;
// var min = 0;
// var sec = 0;
// var msec = 0;



// var hrs = document.getElementById('txthours');
// var minuts = document.getElementById('txtminuts');
// var second = document.getElementById('txtsecond');
// var msecond = document.getElementById('txtmsecond');
// var i = 0;
// let setInterVal ;

// function startWatch(){
//     setInterVal =  setInterval(() => {
//         msecond.innerHTML = i;
//         i++;
//     }, 1000);
// }

// function stopWatch(){
//     clearInterval(setInterVal);
// }

// function clearWatch(){
//     hrs.innerHTML = hour;
//     minuts.innerHTML = min;
//     second.innerHTML = sec;
//     msecond.innerHTML = msec;
