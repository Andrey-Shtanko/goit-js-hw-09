import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const refs = {
  dateInput: document.getElementById(`datetime-picker`),
  startButton: document.querySelector(`[data-start]`),
};
refs.startButton.setAttribute(`disabled`, true);
let deadLine;

const fp = flatpickr(`input[type = 'text']`, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadLine = selectedDates[0];
    const nowDate = new Date();
    if (deadLine.getTime() > nowDate.getTime()) {
      refs.startButton.removeAttribute(`disabled`, true);
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
});
