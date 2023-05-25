const lessonTime = new Date();
lessonTime.setDate(lessonTime.getDate() + 1);
lessonTime.setHours(9, 30);
const daysContainer = document.getElementById('days');
const hoursContainer = document.getElementById('hours');
const minutesContainer = document.getElementById('minutes');
const secondsContainer = document.getElementById('seconds');
const countdownContainer = document.querySelector('.countdown-container');

const countdown = setInterval(function() {
    
    daysContainer.innerHTML = 0;
    const currentTime = new Date();
    const timeLeft = lessonTime - currentTime;
    const leftHours = Math.floor(timeLeft / (60 * 60 * 1000));
    const leftMinutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
    const leftSeconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
    hoursContainer.innerHTML = leftHours;
    minutesContainer.innerHTML = leftMinutes;
    secondsContainer.innerHTML = leftSeconds;

    console.log('Tempo rimanente: ' + leftHours + ":" + leftMinutes + ":" + leftSeconds);

    if (timeLeft < 0) {
        clearInterval(countdown);
        addElement('h3', 'Lesson time!', countdownContainer);
    }
}, 1000);


/* FUNCTIONS */

/**This function creates an html element of the chosen type, with the chosen text, and adds it at the end of the selected container.
 * 
 * @param {*} type The type of html element that will be created. 
 * @param {*} innerText The text that the created element will have inside.
 * @param {*} class The name of the class that will be added to the created element.
 * @param {*} container The container at the end of which the element will be added.
 */
function addElement(type, innerText, container) {
    type = document.createElement(type);
    type.innerHTML = innerText;
    container.append(type);
}