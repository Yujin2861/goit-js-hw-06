
const numbersOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numbersOfCategories.length}`)

numbersOfCategories.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent} 
    Elements: ${element.lastElementChild.children.length}`)
})



