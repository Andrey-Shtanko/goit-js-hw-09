import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const refs = {
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
  ms = deadLine.getTime() - new Date().getTime();
  if (ms < 0) {
    clearInterval(id);
  } 
  
  console.log(convertMs(ms));
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