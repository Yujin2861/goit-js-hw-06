/*const refs = {
    nameInputValue: document.querySelector(`#name-input`),
    nameOutputValue: document.querySelector(`#name-output`),
}*/

const nameInputValue = document.querySelector(`#name-input`);
const nameOutputValue = document.querySelector(`#name-output`);

//console.dir(nameOutputValue.textContent)

nameInputValue.addEventListener(`input`, onInput);

function onInput(event) {

    const nameInputValue = event.currentTarget.value;

    nameOutputValue.textContent = nameInputValue === "" ? "Anonymous" : nameInputValue;

    /*if (nameOutputValue.textContent = nameInputValue === "") { nameOutputValue.textContent = "Anonymous" }
    else {nameOutputValue.textContent = nameInputValue}*/
        
    
    
}