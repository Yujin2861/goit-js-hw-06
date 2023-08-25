

const nameInputValue = document.querySelector(`#name-input`);
const nameOutputValue = document.querySelector(`#name-output`);



nameInputValue.addEventListener(`input`, onInput);

function onInput(event) {

    const nameInputValue = event.currentTarget.value;

    nameOutputValue.textContent = nameInputValue === "" ? "Anonymous" : nameInputValue;
    
}