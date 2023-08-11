// ==================== TASK-05 ====================

const refs = {
    inputEl: document.querySelector("#name-input"),
    outputEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener('input', (event) => {

    refs.outputEl.textContent = event.currentTarget.value;

    // handle the user input is an empty string; trim() -> with spaces
    if (!event.currentTarget.value.trim()) {
        refs.outputEl.textContent = "Anonymous";
    }
});