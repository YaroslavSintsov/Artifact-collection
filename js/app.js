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
})