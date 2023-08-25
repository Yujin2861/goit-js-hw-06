
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

