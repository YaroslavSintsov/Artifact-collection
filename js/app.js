// Импорт bootstrap
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import {isWebp} from './includes/functions/isWebp.js'
import {menuInit} from './includes/functions/burgerMenu.js'
import {tabs} from './includes/functions/tabs.js'
import {spollers} from './includes/functions/spollers.js'
import * as scroll from './includes/functions/scroll/scroll.js'
import * as forms from './includes/functions/forms/forms.js'

menuInit()
const swiper = new Swiper('.slide', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
        renderFraction: function(currentClass, totalClass){
            return '<span class="' + currentClass + ' "> </span> ' +
            'из ' +
            '<span class ="' + totalClass + '"></span>'
        }
    },
    slidesPerView: 'auto',
    watchOverflow: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        425: {

        }
    }
})
let message = document.getElementById('message')
let message2 = document.getElementById('message-two')
let message3 = document.getElementById('message2')
const form = {
    email: document.getElementById('email'),
    name: document.getElementById('name'),
    button: document.getElementById('button'),
}
form.button.onclick = () => checkForm()
function checkForm(){
    const inputTest = form.email.getElementsByTagName('input')
    let emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTest.test(form.email.value)) {
        message.style.display = 'block'
        message3.style.display = 'none'
    }
    if (emailTest.test(form.email.value)) {
        message.style.display = 'none'
        message3.style.display = 'none'
    }
    if (form.email.value === "") {
        message3.style.display = 'block'
        message.style.display = 'none'
    }
    if (form.name.value === "") {
        message2.style.display = 'block'
    }
    if (form.name.value) {
        message2.style.display = 'none'
    }
}