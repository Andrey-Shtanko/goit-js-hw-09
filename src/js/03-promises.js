import Notiflix from 'notiflix';

const refs = {
  firstDelay: document.querySelector(`input[name="delay"]`),
delayStep: document.querySelector(`input[name="step"]`),
  amount: document.querySelector(`input[name="amount"]`),
btn: document.querySelector(`button`),
}
let inputAmount
let inputFirstDelay
let inputDelayStep

refs.btn.addEventListener(`click`, onSubmit)

refs.amount.addEventListener(`input`, (event) => {
inputAmount = event.target.value;
  // console.log(inputAmount);
  return inputAmount
})

refs.firstDelay.addEventListener(`input`, (event) => {
inputFirstDelay = event.target.value;
  // console.log(inputFirstDelay);
  return inputFirstDelay
})

refs.delayStep.addEventListener(`input`, (event) => {
inputDelayStep = event.target.value;
  // console.log(inputDelayStep);
  return inputDelayStep
})



function onSubmit(event) {
  event.preventDefault()
  for (let i = 1; i <= inputAmount; i += 1) {
    createPromise()
  }
}















function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
  
}
