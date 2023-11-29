const sectionMenu = document.querySelectorAll('.conteudo div img')
const section = document.querySelectorAll('.conteudo')

//Navegação por tabs para conteúdos sobre jogadores
function activeContent() {
    if (sectionMenu.length && section.length) {
        function activeTab(index) {
            section.forEach(() => {
                section[index].classList.toggle('texto')
            })
        }
        
        sectionMenu.forEach((imgItem, index) => {
            imgItem.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
activeContent()

//Scroll suave ao selecionar uma das opções do menu
function initScroll() {

    const linkInternos = document.querySelectorAll('#menu a[href^="#"]')

    function softScroll(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
    
    linkInternos.forEach((link) => {
        link.addEventListener('click', softScroll)
    })
}

initScroll()