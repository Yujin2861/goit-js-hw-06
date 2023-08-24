const form = document.querySelector(`.login-form`);
console.log(form)
form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;
    console.log(email, password)

    if (email === '' || password === '') {
        return alert('Заполните все поля')
    }

    const formData = { email: email, Password: password}

    
    console.log(formData)
    event.currentTarget.reset()
}



/*
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log(`name`, name);
        console.log('value', value);
    });
*/
    

