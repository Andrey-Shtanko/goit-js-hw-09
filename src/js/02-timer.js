import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const refs = {
  days: document.querySelector(`[data-days]`),
  hours: document.querySelector(`[data-hours]`),
  minutes: document.querySelector(`[data-minutes]`),
  seconds: document.querySelector(`[data-seconds]`),
  dateInput: document.getElementById(`datetime-picker`),
  startButton: document.querySelector(`[data-start]`),
};
refs.startButton.setAttribute(`disabled`, true);
let deadLine;
let nowDate;
let ms;

const fp = flatpickr(`input[type = 'text']`, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadLine = selectedDates[0];
    nowDate = new Date();
    if (deadLine.getTime() > nowDate.getTime()) {
      refs.startButton.removeAttribute(`disabled`, true);
    } else {
      refs.startButton.setAttribute(`disabled`, true);
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
});

refs.startButton.addEventListener(`click`, onStart);
let id;
function onStart() {
  id = setInterval(delta, 1000);
}

function delta() {
  ms = deadLine.getTime() - Date.now();
  // console.log(ms);
  if (ms < 1001 || ms === 0 || ms <= 0) {
    refs.startButton.setAttribute(`disabled`, true);
    clearInterval(id);
  }
  const convertTime = convertMs(ms);
  const { days, hours, minutes, seconds } = convertTime;
  const padSeconds = addLeadingZero(seconds);
  const padMinutes = addLeadingZero(minutes);
  const padHours = addLeadingZero(hours);
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${padHours}`;
  refs.minutes.textContent = `${padMinutes}`;
  refs.seconds.textContent = `${padSeconds}`;
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

function addLeadingZero(value) {
  return String(value).padStart(2, `0`);
}
