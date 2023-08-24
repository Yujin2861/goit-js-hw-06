
const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, onInputBlur);

function onInputBlur() {
    
    const lusFocus = Number(input.getAttribute(`data-length`));
    
    if (lusFocus !== input.value.length) {
        input.classList.add("invalid");
        input.classList.remove("valid");
        
    } else {
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
}



/*const input = document.querySelector(`#validation-input`);
const style = document.querySelector(`style`);
console.dir(style);
//console.dir(input.dataset.length)
input.addEventListener(`blur`, onInputBlur);
function onInputBlur(event) {
    console.log(`blur`);
    const lusFocus = Number(input.dataset.length);
    console.log(typeof(input.dataset.length))
    if (lusFocus !==  input.value.length) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    } else {
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
}*/
