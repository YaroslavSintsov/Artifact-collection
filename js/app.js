// Импорт bootstrap
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import {isWebp} from './includes/functions/isWebp.js'
import {menuInit} from './includes/functions/burgerMenu.js'
import {tabs} from './includes/functions/tabs.js'
import {spollers} from './includes/functions/spollers.js'
import * as scroll from './includes/functions/scroll/scroll.js'
import * as forms from './includes/functions/forms/forms.js'

menuInit()
let strain1 = document.getElementById('s1')
let strain2 = document.getElementById('s2')
let strain3 = document.getElementById('s3')
let cont1 = document.getElementById('i1')
let cont2 = document.getElementById('i2')
let cont3 = document.getElementById('i3')
strain1.onclick = function(){
    cont2.classList.add('c2')
    cont1.classList.remove('c2')
    cont3.classList.add('c2')
}
strain2.onclick = function(){
    cont1.classList.add('c2')
    cont2.classList.remove('c2')
    cont3.classList.add('c2')
}
strain3.onclick = function(){
    cont1.classList.add('c2')
    cont3.classList.remove('c2')
    cont2.classList.add('c2')
}