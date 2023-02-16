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

    const bodyHiddenClass = 'body_sections-hidden'
    document.addEventListener('transitionend', show, {once: true})
    document.body.classList.add(bodyHiddenClass)
    
    function show(){
        if (activeSection) {
            activeSection.classList.remove(activeClass)
        }

        setNewSection()
        getSectionByHash().scrollIntoView()
        
        setTimeout(function(){
            document.body.classList.remove(bodyHiddenClass)
        }, 0)
    }
}

function setNewSection() {
    const section = getSectionByHash()
    section.classList.add(activeClass)
    activeSection = section
}

for (const link of document.querySelectorAll('.section-link')) {
    const section = getSectionByHash(link.getAttribute('href'))
    link.addEventListener('click', function() {
        section.scrollIntoView()
    })
}

function getSectionByHash(hash) {
    if (!hash) hash = location.hash
    const sectionName = hash.replace('#', '') || 'home'
    const section = sections[sectionName]
    return section
}