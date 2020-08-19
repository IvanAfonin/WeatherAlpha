"use strict"
//Setting log in form
document.querySelector('.registr__button').onclick = (event) => {
    // Need to not reboot the page
    event.preventDefault();
    //Getting all input values and setting email symbols to lower case
    const emailValue = document.querySelector('.registr__email').value.toLowerCase();
    const loginValue = document.querySelector('.registr__login').value;
    const passwordValue = document.querySelector('.registr__password').value;
    let newUser = {
        'email': emailValue,
        'password': passwordValue,
    }
    //Error Out
    let out = ''
    const errorOut = document.querySelector('.errors');

    // Checking all requirements
    if (passwordValue.includes(' ')) {
        out = "Password shouldn't has spaces"

    } else if (passwordValue.length < 8 || loginValue.length < 8) {

        out = "Password or login has less then 8 symbols"

    } else {
        for (let key in localStorage) {
            if (localStorage.key(key).includes(loginValue) == true) {
                //Works until index become 1

                out = 'Login was registered'

            } else if (localStorage.key(key) != loginValue) {
                localStorage.setItem(loginValue, JSON.stringify(newUser))
                out = 'Success'
                setTimeout(2000)
                window.location.href = "login.html"
                break
            }
        }
    }
    errorOut.textContent = out;
}