import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(`.form`),
  }

let inputAmount
let inputFirstDelay
let inputDelayStep
let delay
let position

refs.form.addEventListener(`submit`, onSubmit)

function onSubmit(event) {

  inputAmount = Number(event.target[2].value);
  inputFirstDelay = Number(event.target[0].value);
  inputDelayStep = Number(event.target[1].value);
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
