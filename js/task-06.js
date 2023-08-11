// ==================== TASK-06 ====================

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('blur', (event) => {
    const enteredSymbols = event.currentTarget.value.length;
    
    if (enteredSymbols === 6) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});