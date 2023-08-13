// ==================== TASK-08 ====================

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (!email.value || !password.value) {
        alert('Please fill all fields');
        return;
    };

    const data = {
        email: email.value,
        password: password.value,
    }

    console.log(data);

    event.currentTarget.reset();
});