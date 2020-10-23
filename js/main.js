let menuToggle = document.querySelector('#menu-toggle')
let menu = document.querySelector('.sidebar')
menuToggle.addEventListener('click', function (evt) {
  evt.preventDefault()
  menu.classList.toggle('visible')
})
