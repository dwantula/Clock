var secondsHand = document.querySelector('.seconds-hand');
var minutesHand = document.querySelector('.minutes-hand');
var hoursHand = document.querySelector('.hours-hand');

function updateClock() {
  var date = new Date();
  var seconds = date.getSeconds();
  var secondsDegrees = (seconds * 6) + 90;
  secondsHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';

  var minutes = date.getMinutes();
  var minutesDegress = (minutes * 6 ) + 90 ;
  minutesHand.style.transform = 'rotate(' + minutesDegress + 'deg )';
  

  var hours = date.getHours();
  var hoursDegress = (hours * 30) + 90;
  hoursHand.style.transform =' rotate(' + hoursDegress + 'deg )';
  
}
setInterval(updateClock, 1000);


