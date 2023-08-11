// ==================== TASK-07 ====================

// saving the references of input and text elements to the refs object
const refs = {
    inputEl: document.querySelector("#font-size-control"),
    textEl: document.querySelector("#text"),
};

// set the font-size to the default value of input
refs.textEl.style.fontSize = `${refs.inputEl.value}px`;

// change the value of the font size according to the value of the input
refs.inputEl.addEventListener('input', (event) => {
    const inputElValue = event.currentTarget.value;
    refs.textEl.style.fontSize = `${inputElValue}px`;
});