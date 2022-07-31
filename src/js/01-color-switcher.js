const refs = {
  btnStart: document.querySelector(`[data-start]`),
  btnStop: document.querySelector(`[data-stop]`),
  body: document.querySelector(`body`),
};

refs.btnStart.addEventListener(`click`, changeBgColor);
refs.btnStop.addEventListener(`click`, stopChangeColor);
let intervalId;

function changeBgColor() {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = `${color}`;
  refs.btnStart.setAttribute(`disabled`, true);
  intervalId = setInterval(changeColor, 1000);
}

function changeColor() {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = `${color}`;
}

function stopChangeColor() {
  clearInterval(intervalId);
  refs.btnStart.removeAttribute(`disabled`);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
