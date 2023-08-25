const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector("#ingredients");

const makeIngredients = ingredientsCallback => {
  return ingredientsCallback.map(ingredient => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = ingredient;
  
  return liElement;
});
};

const elements = makeIngredients(ingredients);

ulElement.append(...elements);



