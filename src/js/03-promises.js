import Notiflix from 'notiflix';

const refs = {
  firstDelay: document.querySelector(`input[name="delay"]`),
delayStep: document.querySelector(`input[name="step"]`),
  amount: document.querySelector(`input[name="amount"]`),
btn: document.querySelector(`button`),
}

refs.btn.addEventListener(`click`, createPromise)


















function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
