const sectionMenu = document.querySelectorAll('.conteudo div img')
const section = document.querySelectorAll('.conteudo')

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
