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
  for (let i = 0; i < inputAmount; i += 1) {
    position = i+1
    if (i === 0) {
      delay = inputFirstDelay
      position = i+1
      createPromise(position, delay).then(({ position, delay }) => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    } else {
      delay = inputFirstDelay + inputDelayStep*i
      createPromise(position, delay).then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    }
    
  }
}











// createPromise(2, 1500)
  // .then(({ position, delay }) => {
  //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  // })
  // .catch(({ position, delay }) => {
  //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  // });




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



  // if (shouldResolve) {
  //   // Fulfill
  // } else {
  //   // Reject
  // }
  // // Notiflix.Notify.info(`position: ${position} delay: ${delay} `);
  return promise
}
