const categoriesEl = document.querySelector('#categories');

// 1.1 Порахуй і виведи в консоль кількість категорій в ul#categories, тобто елементів li.item.

const numberOfCategories = categoriesEl.children.length;

console.log('Number of categories: ', numberOfCategories);

// 1.2 Для кожного элемента li.item у списку ul#categories, знайди і виведи в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categories = [...categoriesEl.children];

categories.forEach(element => {
    console.log(''); // for better console inspection
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.children.length);
});