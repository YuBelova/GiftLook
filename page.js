const registrationBtn = document.querySelector('#registration')
const popupRegistartion = document.querySelector('.reg__popup')
const crossBtn = document.querySelector('#cross')
const body = document.querySelector('main')
const loginBtn = document.querySelector('#login')
const popupLogin = document.querySelector('.login__popup')
const overlay = document.querySelector(".overlay");

registrationBtn.addEventListener('click', () => {
    popupRegistartion.classList.add('reg__popup--show')
    overlay.classList.add('overlay--show')
});
crossBtn.addEventListener('click', () => {
    popupRegistartion.classList.remove('reg__popup--show')
});
loginBtn.addEventListener('click', () => {
    overlay.classList.add('overlay--show')
    popupLogin.classList.add('login__popup--show')
})
overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay--show')
    popupLogin.classList.remove('login__popup--show')
    popupRegistartion.classList.remove('reg__popup--show');
})