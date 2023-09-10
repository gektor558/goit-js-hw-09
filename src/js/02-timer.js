import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  startBtn: document.querySelector('[data-start'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
}

refs.startBtn.disabled = true;

let userDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if(selectedDates[0] < new Date()) {
      window.alert("Please choose a date in the future");
      return refs.startBtn.disabled = true;
    }
    refs.startBtn.disabled = false;
    userDate = selectedDates[0];
  },
};

flatpickr('#datetime-picker', options)

const onStartBtnClick = event => {
  refs.startBtn.disabled = true;
  const idInterval = setInterval(() => {
    const diff = userDate - new Date();
    if(diff < 1000) {
      clearInterval(idInterval);
    }
    const myDate = convertMs(diff)
    render(myDate);
  }, 1000)
}

refs.startBtn.addEventListener('click', onStartBtnClick);

const render = (myDate) => {
  const {days, minutes, hours, seconds} = myDate;
  refs.daysEl.textContent = addLeadingZero(days);
  refs.hoursEl.textContent = addLeadingZero(hours);
  refs.minutesEl.textContent = addLeadingZero(minutes);
  refs.secondsEl.textContent = addLeadingZero(seconds);
}

const addLeadingZero = (value) => {
  return value.toString().padStart(2, '0')
}














function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}