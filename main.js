const secondsHand = document.getElementById('#secondsHand');
const minsHand = document.getElementById('#minsHand');
const hourHand = document.getElementById('#hourHand');

function setTime() {
   const now = new Date();
   
   const seconds = now.getSeconds();
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   console.log(secondsDegrees)
   secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
}

setInterval(() => {
    setTime();
}, 1000);
setTime();