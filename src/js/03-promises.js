import Notiflix from 'notiflix';
const form = document.querySelector(".form");
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

// amount.value = "5";


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};



const cb = (e) => {
  e.preventDefault();
  let delayValue = Number(delay.value);
  let delayStep = Number(step.value);
  let delayAmount = Number(amount.value);
  console.log(delayValue, delayStep, delayAmount);

  for (let position = 1; position <= delayAmount; position++) {
    
 
  createPromise(position, delayValue)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delayValue += delayStep;
    console.log(delayValue);
   }
};

form.addEventListener('submit', cb);

