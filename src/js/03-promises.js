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
let position

refs.btn.addEventListener(`click`, onSubmit)

refs.amount.addEventListener(`input`, (event) => {
inputAmount = Number(event.target.value);
    return inputAmount
})

refs.firstDelay.addEventListener(`input`, (event) => {
inputFirstDelay = Number(event.target.value);
    return inputFirstDelay
})

refs.delayStep.addEventListener(`input`, (event) => {
inputDelayStep = Number(event.target.value);
    return inputDelayStep
})


function onSubmit(event) {
  event.preventDefault()
  delay = inputFirstDelay
  for (let i = 1; i <= inputAmount; i += 1) {
     
      position = i
      createPromise(position, delay).then(({ position, delay }) => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
     delay += inputDelayStep
      
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }
  }, delay);
 
});
 
  return promise
}
