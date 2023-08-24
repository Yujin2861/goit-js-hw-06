const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulElement = document.querySelector(".gallery");

const liElements = images.map(({ url, alt }) => `<li>
  <img src="${url}" alt="${alt}" width = 1140px class="img"  
</li>`).join('');

ulElement.insertAdjacentHTML("beforeend", liElements);
const ulElementAfter = document.querySelector(".gallery");
console.dir(ulElementAfter);


/*const liElement = document.createElement("li");

const image = document.createElement("img");
image.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
image.alt = 'White and Black Long Fur Cat';
//image.style.display = 
  
console.log(ulElement)

const makeImages = image => {}*/

