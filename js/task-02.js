const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navEl = document.querySelector('#ingredients');
const addItems = ingredients =>
  ingredients.map((ingredient) => {
    const navItemEl = document.createElement('li');
    navItemEl.textContent = ingredient;
    return navItemEl;
  });
  const listEl = addItems(ingredients);
navEl.append(...listEl);