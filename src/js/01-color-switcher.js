
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bntStart = document.querySelector('[data-start]');
const bntStop = document.querySelector('[data-stop]');
let timerId = null;
bntStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    bntStart.setAttribute("disabled", "disabled");
});

bntStop.addEventListener('click', () => {
    clearInterval(timerId);
    bntStart.removeAttribute("disabled");
});