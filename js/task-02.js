const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// TASK-02

const ingredientsEl = document.querySelector("#ingredients");

const ingredientsArray = ingredients.map(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  liEl.classList.add('item');
  return liEl;
});

ingredientsEl.append(...ingredientsArray);