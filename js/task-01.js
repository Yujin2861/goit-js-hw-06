
/*const h2 = document.querySelectorAll("h2");
console.dir(h2);

h2.forEach((nameCategory) => console.dir(`Category: ${nameCategory.textContent}`));

const numbersCat = document.querySelectorAll("ul");
console.dir(`Number of categories: ${numbersCat.length}`)

numbersCat.forEach(qeuntityCat => console.dir(qeuntityCat = qeuntityCat.children.length));
*/


const numbersOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numbersOfCategories.length}`)

//const list = document.querySelector("#categories");
//console.log(list.children);

//const newList = ([...list.children]);

numbersOfCategories.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent} 
    Elements: ${element.lastElementChild.children.length}`)
})



