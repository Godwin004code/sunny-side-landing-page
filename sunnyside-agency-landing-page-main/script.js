const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.container-nav')

hamburger.addEventListener('click', function() {
    nav.classList.toggle('active')
})