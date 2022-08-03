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
let delay

refs.btn.addEventListener(`click`, onSubmit)

refs.amount.addEventListener(`input`, (event) => {
inputAmount = Number(event.target.value);
  // console.log(inputAmount);
  return inputAmount
})

refs.firstDelay.addEventListener(`input`, (event) => {
inputFirstDelay = Number(event.target.value);
  
  return inputFirstDelay
})

refs.delayStep.addEventListener(`input`, (event) => {
inputDelayStep = Number(event.target.value);
  // console.log(inputDelayStep);
  return inputDelayStep
})



function onSubmit(event) {
  event.preventDefault()
  for (let i = 1; i <= inputAmount; i += 1) {

    if (i === 1) {
      delay = inputFirstDelay
      createPromise(i, delay)
    } else {
      delay = inputFirstDelay + inputDelayStep*i
      createPromise(i, delay)
    }
    
  }
}















function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
  Notiflix.Notify.info(`position: ${position} delay: ${delay} `);
  
}
