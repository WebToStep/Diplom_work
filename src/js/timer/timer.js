const countTimer = deadline => {
    const timerDays = document.querySelectorAll('.count_1'),
        timerHours = document.querySelectorAll('.count_2'),
        timerMinutes = document.querySelectorAll('.count_3'),
        timerSeconds = document.querySelectorAll('.count_4');

    const getTimeRemaning = () => {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = ('0' + Math.floor(timeRemaining % 60)).slice(-2),
            minutes = ('0' + Math.floor((timeRemaining / 60) % 60)).slice(-2),
            hours = ('0' + Math.floor((timeRemaining / 60 / 60) % 24)).slice(-2),
            days = ('0' + Math.floor(timeRemaining / 60 / 60 / 24)).slice(-2);

        timerDays.forEach(element => {
            element.lastChild.textContent = days;
        });
        timerHours.forEach(element => {
            element.lastChild.textContent = hours;
        });
        timerMinutes.forEach(element => {
            element.lastChild.textContent = minutes;
        });
        timerSeconds.forEach(element => {
            element.lastChild.textContent = seconds;
        });

        return timeRemaining;
    };

    const updateClock = () => {
        const timer = getTimeRemaning();
        let interval;
        if (timer > 0) {
            interval = setInterval(getTimeRemaning, 1000);
        } else {
            clearInterval(interval);

            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    };
    updateClock();
};

// get timer + n Days
const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export { countTimer, addDays };
