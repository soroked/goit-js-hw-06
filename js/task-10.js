function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ==================== TASK-10 ====================

const createBoxes = (amount) => {
  
  let DIV_WIDTH = 30;
  let DIV_HEIGHT = 30;
  let markup = '';

  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="width:${DIV_WIDTH}px;height:${DIV_HEIGHT}px; background-color:${getRandomHexColor()}"></div>`;
    DIV_WIDTH += 10;
    DIV_HEIGHT += 10;
  }
  console.log(markup);
  return markup;
};

// all references
const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("button[data-create]");
const boxesEl = document.querySelector("#boxes");
const btnDestroyEl = document.querySelector("button[data-destroy]");

btnCreateEl.addEventListener('click', () => {
  boxesEl.innerHTML = createBoxes(inputEl.value);
});

btnDestroyEl.addEventListener('click', () => {
  boxesEl.innerHTML = '';
  inputEl.value = '';
});