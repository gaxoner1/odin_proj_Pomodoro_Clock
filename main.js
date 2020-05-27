const countDown = document.querySelector('.countDown');
document.getElementById('startBtn').addEventListener('click', pomodoro);

let seconds = 0;
let interval;
let timer = 1;

function pomodoro() {
   seconds = timer*60 || 0;
   interval = setInterval(function() {

        seconds--;
        //console.log(seconds);
        let minutes = Math.floor(seconds/60);
        let rem_Seconds = seconds - (minutes*60);
        console.log(rem_Seconds);
        countDown.innerHTML = minutes + ":" + rem_Seconds;
        //countDown.innerHTML = seconds;
        if(!seconds){
             clearInterval(interval);
             alert("🚨 Break Time 😎.");
             breakTime(1);
        }
   },1000)
}

function breakTime(mins) {
   seconds = mins*60 || 0;
   interval = setInterval(function() {

        seconds--;
        //console.log(seconds);
        let minutes = Math.floor(seconds/60);
        let rem_Seconds = seconds - (minutes*60);
        console.log(rem_Seconds);
        countDown.innerHTML = minutes + ":" + rem_Seconds;
        //countDown.innerHTML = seconds;
        if(!seconds){
             clearInterval(interval);
             alert("🚨 Break Time Over 😎.");
             pomodoro();
        }
   },1000)
}
