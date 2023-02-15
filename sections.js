const sections = (function(){
    let resObj = {}
    const elements = document.querySelectorAll('[data-section]')
    elements.forEach(function (element) {
        const name = element.dataset.section
        resObj[name] = element
    })
    return resObj
})()

let activeSection

updateSection()

window.onhashchange = updateSection

function updateSection() {
    const newHash = location.hash
    const sectionName = newHash.replace('#', '') || 'home'
    const section = sections[sectionName]
    const activeClass = 'section_active'
    if (activeSection) activeSection.classList.remove(activeClass);
    section.classList.add(activeClass)
    activeSection = section
}