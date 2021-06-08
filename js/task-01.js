const categoriesRef = document.querySelector('#categories');
console.log(`В списке ${categoriesRef.children.length} категории.`);

const getListData = list => {
  [...list.children].forEach(item => {
    const title = item.querySelector('h2').textContent;
    const quantity = item.querySelector('ul').children.length;
    console.log(`Категория: ${title}`);
    console.log(`Количество элементов: ${quantity}`);
  });
};
getListData(categoriesRef)