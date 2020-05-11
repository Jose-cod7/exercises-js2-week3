function setAlarm() {
  let count = document.querySelector('#timeRemaining');
 let value = document.querySelector('#alarmSet').value
 count.innerText = "Time Remaining:" + '00:' + value;
 let background = document.querySelector('body')
  
 
       const countDown = setInterval(() => {
         console.log("insert time out", value);
         value-- 
         count.innerText = "Time Remaining:" + '00:' + value;
         if(count.innerText === "Time Remaining:" + '00:' + '0') {
           clearInterval(countDown)
           playAlarm()
           background.style.backgroundColor = '#81ADF1'
         }
               }, 1000);
     
   
   
 }


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
