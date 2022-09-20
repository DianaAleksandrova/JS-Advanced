function timeToWalk(steps, footprint, speed){
    let meters = steps * footprint;
    let speedInSec = speed / 3.6;
    let time = meters / speedInSec;
    let rest = Math.floor(meters / 500);
    let timeInMin = Math.floor(time / 60);
    let timeInSec = Math.ceil(time - (timeInMin * 60));
    let timeInHour = Math.floor(time / 3600);
    timeInMin += rest;
    timeInHour += Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60;

    let hour = timeInHour < 10 ? `0${timeInHour}` : `${timeInHour}`;
    let min = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let sec = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    console.log(`${hour}:${min}:${sec}`);
}
timeToWalk(9000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);