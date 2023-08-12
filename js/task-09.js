function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ==================== TASK-09 ====================

const refs = {
  btnColorEl: document.querySelector("button.change-color"), bodyEl: document.querySelector("body"),
  textColorEl: document.querySelector(".color"),
};

refs.btnColorEl.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor();

  refs.textColorEl.textContent = randomHexColor;
  refs.bodyEl.style.backgroundColor = randomHexColor;
});