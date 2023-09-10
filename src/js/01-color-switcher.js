const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
}

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const onStartBtnClick = event => {
   intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000)
  refs.startBtn.disabled = true;
}

const onStopBtnClick = event => {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener('click', onStartBtnClick);

refs.stopBtn.addEventListener('click', onStopBtnClick)