alert("abcd     ")

var hours = 0;
var mins = 0;
var seconds = 0;
var milliseconds = 0;

var hoursDisp = document.getElementById("hoursDisp");
var minsDisp = document.getElementById("minsDisp");



function renderTimer(){
    hoursDisp.innerHTML = hours;
    console.log(hoursDisp)
    console.log(hoursDisp.innerHTML)
}

renderTimer()





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
