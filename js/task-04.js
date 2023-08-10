let counterValue = 0;

const counterEl = document.querySelector("#value");

//  ==================== TASK-04 solution 1 ====================

// here is the first solution of this task. It is interesting to know which would you prefer. In this case I added only one listener to the whole document

// document.addEventListener('click', event => {
//     const action = event.target.dataset.action;

//     if (action === 'increment') {
//         counterValue += 1;
//     } else if (action === 'decrement') {
//         counterValue -= 1;
//     };

//     counterEl.textContent = counterValue;
// });

//  ==================== TASK-04 solution 2 ====================

// in this case I get references to both buttons. then every button get the listener

const {btnIncr, btnDecr} = {
    btnIncr: document.querySelector('button[data-action="increment"]'),
    btnDecr: document.querySelector('button[data-action="decrement"]'),
};

/** is it better to have shorter code or to write explicit:
 *  counterValue += 1;
 *  counterEl.textContent = counterValue;
 * */

btnIncr.addEventListener('click', () => counterEl.textContent = ++counterValue);
btnDecr.addEventListener('click', () => counterEl.textContent = --counterValue);
