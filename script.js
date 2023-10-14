const menu = document.querySelectorAll('#menu li')

menu.forEach((item) => {
    item.addEventListener('mouseover', function() {
        item.classList.add('ativo')
    })
})

