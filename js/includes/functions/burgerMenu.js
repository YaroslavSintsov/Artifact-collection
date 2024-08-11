import {
  bodyLock,
  bodyLockStatus,
  bodyLockToggle,
  bodyUnlock
} from './services/flags.js'

export function menuInit() {
  if (document.querySelector('.menu-btn')) {
    document.addEventListener('click', function (e) {
      if (bodyLockStatus && e.target.closest('.menu-btn')) {
        bodyLockToggle()
        document.documentElement.classList.toggle('menu-open')
      }
    })
  }
}

export function menuOpen() {
  bodyLock()
  document.documentElement.classList.add('menu-open')
}

export function menuClose() {
  bodyUnlock()
  document.documentElement.classList.remove('menu-open')
}
