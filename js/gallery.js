const allCategories = document.getElementById('categories');

const items = allCategories.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(element => {
  const categoryName = element.firstElementChild.textContent;
  console.log(`Category: ${categoryName}`);
  const countOfElements = element.querySelectorAll('ul li:not(.item)').length;
  console.log(`Elements: ${countOfElements}`);
});
