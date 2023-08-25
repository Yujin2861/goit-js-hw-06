function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor("red"))


const changeColorBtn = document.querySelector(`.change-color`);
const valueColor = document.querySelector(`.color`);
const body = document.querySelector(`body`);

changeColorBtn.addEventListener(`click`, onTargetBtn);

function onTargetBtn(event) {
  console.log(`click`);

  let color = getRandomHexColor();
  
  body.style.backgroundColor = color;
  valueColor.textContent = color;
}