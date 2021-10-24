const registrationBtn = document.querySelector('#registration')
const popupRegistartion = document.querySelector('.reg__popup')
const crossBtn = document.querySelector('#cross')

registrationBtn.addEventListener('click', () => {
    popupRegistartion.classList.add('reg__popup--show')
})

crossBtn.addEventListener('click', () => {
    popupRegistartion.classList.remove('reg__popup--show')
})

