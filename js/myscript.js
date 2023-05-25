const lessonTime = new Date();
const dayOfWeek = lessonTime.getDay();

/* BONUS - dayOfWeek restituisce un valore da 0 a 6, corrispondente a uno dei giorni della settimana, quello odierno. Volendo escludere dal nostro countdown il sabato e la domenica nei quali non c'è lezione, nel caso dayOfWeek abbia valore 5 ovvero corrispondente al venerdì, settiamo la data assegnata a lessonTime tra 3 giorni. Nel caso abbia valore 6, ovvero corrispondente al sabato, settiamo la data tra 2 giorni. In tutti gli altri casi settiamo la data tra 1 giorno. */
if (dayOfWeek == 5) {
    lessonTime.setDate(lessonTime.getDate() + 3);
} else if (dayOfWeek == 6) {
    lessonTime.setDate(lessonTime.getDate() + 2);
} else {
    lessonTime.setDate(lessonTime.getDate() + 1);
}

lessonTime.setHours(9, 30);

const daysContainer = document.getElementById('days');
const hoursContainer = document.getElementById('hours');
const minutesContainer = document.getElementById('minutes');
const secondsContainer = document.getElementById('seconds');
const countdownContainer = document.querySelector('.countdown-container');

const countdown = setInterval(function() {
    
    const currentTime = new Date();
    const timeLeft = lessonTime - currentTime;

    let leftSeconds = Math.floor(timeLeft / 1000);
    let leftMinutes = Math.floor(leftSeconds / 60);
    let leftHours = Math.floor(leftMinutes / 60);
    const leftDays = Math.floor(leftHours / 24);

    leftSeconds = leftSeconds % 60;
    leftMinutes = leftMinutes % 60;
    leftHours = leftHours % 24;
    
    daysContainer.innerHTML = leftDays;
    hoursContainer.innerHTML = leftHours;
    minutesContainer.innerHTML = leftMinutes;
    secondsContainer.innerHTML = leftSeconds;

    console.log('Time to the next lesson: ' + leftDays + " days, " + leftHours + " hours, " + leftMinutes + " minutes, " + leftSeconds + " seconds.");

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
 * @param {*} container The container at the end of which the element will be added.
 */
function addElement(type, innerText, container) {
    type = document.createElement(type);
    type.innerHTML = innerText;
    container.append(type);
}