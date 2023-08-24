const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/*const liElement = document.createElement("li");
liElement.classList.add("item");
liElement.textContent = "Potatoes";
console.log(liElement);*/

const ulElement = document.querySelector("#ingredients");

/*const elements = ingredients.map(ingredient => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = ingredient;
  
  return liElement;
});

console.log(elements);*/

const makeIngredients = ingredientsCallback => {
  return ingredientsCallback.map(ingredient => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = ingredient;
  
  return liElement;
});
};

const elements = makeIngredients(ingredients);

/*const elements = [];

for (let i = 0; i < ingredients.length; i += 1){
  const ingredient = ingredients[i];
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = ingredient;
  elements.push(liElement);
}*/

ulElement.append(...elements);



//ulElement.append(liElement, );