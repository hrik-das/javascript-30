const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
	
function setDate(){
    const date = new Date();
    const second = date.getSeconds();
    const secondDegrees = (90 + (second / 60) * 360);
    const minute = date.getMinutes();
    const minuteDegrees = (90 + (minute / 60) * 360);
    const hour = date.getHours();
    const hourDegrees = (90 + (hour / 12) * 360 + (minute / 12 / 60) * 360);

    if(secondDegrees === 90) secondHand.style.transition = "all 0s";
    else secondHand.style.transition = "all 0.05s cubic-bezier(0.9, 0.54, 0.26, 1.68)";
    if (minuteDegrees === 90) minHand.style.transition = "all 0s";
    else minHand.style.transition = "all 0.1s cubic-bezier(0.9, 0.54, 0.26, 1.68)";
    
    secondHand.style.transform = `rotate(${ secondDegrees }deg)`;
    minHand.style.transform = `rotate(${ minuteDegrees }deg)`;
    hourHand.style.transform = `rotate(${ hourDegrees }deg)`;
    // console.log(`${hour}:${minute}:${second} - ${hourDegrees}:${minuteDegrees}:${secondDegrees}` );
}

setInterval(setDate, 1000);