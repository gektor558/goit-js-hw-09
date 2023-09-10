function createPromise(position, delay) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay});
  }
    }, delay)
  })
  return myPromise;
}

const refs = {
  formEl: document.querySelector('.form'),
};

const onFormElSubmit = event => {
  event.preventDefault();
  const amount = +event.target.elements.amount.value;
  const delay = +event.target.elements.delay.value;
  const step = +event.target.elements.step.value;
  for(let i = 0; i <= amount; i++){
    createPromise(i + 1, delay + i*step).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
}

refs.formEl.addEventListener('submit', onFormElSubmit)
