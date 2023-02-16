const sections = (function(){
    let resObj = {}
    const elements = document.querySelectorAll('[data-section]')
    elements.forEach(function (element) {
        const name = element.dataset.section
        resObj[name] = element
    })
    return resObj
})()
const activeClass = 'section_active'

let activeSection

updateSection()

window.onhashchange = updateSection

function updateSection() {
    if (!activeSection) {
        setNewSection()
        return
    }

    document.addEventListener('transitionend', show, {once: true})
    document.body.classList.add('body_sections-hidden')
    
    function show(){
        if (activeSection) {
            activeSection.classList.remove(activeClass)
        }

        setNewSection()
        
        setTimeout(function(){
            document.body.classList.remove('body_sections-hidden')
        }, 0)
    }

}

function setNewSection() {
    const newHash = location.hash
    const sectionName = newHash.replace('#', '') || 'home'
    const section = sections[sectionName]
    section.classList.add(activeClass)
    activeSection = section
}