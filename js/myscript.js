const lessonTime = new Date();
lessonTime.setDate(lessonTime.getDate() + 1);
lessonTime.setHours(9, 30, 0, 0);

const countdown = setInterval(function() {

    const currentTime = new Date();
    const timeLeft = lessonTime - currentTime;
    const leftHours = Math.floor(timeLeft / (60 * 60 * 1000));
    const leftMinutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
    const leftSeconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
    console.log('Tempo rimanente: ' + leftHours + ":" + leftMinutes + ":" + leftSeconds);

    if (timeLeft < 0) {
        clearInterval(countdown);
        console.log('Countdown finito!');
    }
}, 1000);
