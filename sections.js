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
    debugger
    document.addEventListener('transitionend', show, {once: true})
    document.body.classList.add('body_sections-hidden')    
    
    function show(){
        if (activeSection) {
            activeSection.classList.remove(activeClass)
        }
        
        const newHash = location.hash
        const sectionName = newHash.replace('#', '') || 'home'
        const section = sections[sectionName]
        section.classList.add(activeClass)
        activeSection = section
        debugger
        setTimeout(function(){document.body.classList.remove('body_sections-hidden')}, 0)
    }
}


// const test = document.querySelector('.test')
// document.querySelector('.test-button_opacity').addEventListener('click', function(){
//     // test.classList.toggle('test_display')
//     test.classList.toggle('test_hidden')
// })
// document.querySelector('.test-button_display').addEventListener('click', function(){
//     test.classList.toggle('test_display')
// })

// document.querySelector('.test-button_on').addEventListener('click', function(){
//     test.classList.toggle('test_display')
//     test.classList.toggle('test_hidden')
// })
// document.querySelector('.test-button_off').addEventListener('click', function(){
//     test.classList.toggle('test_hidden')
//     test.addEventListener('transitionend', )
//     test.classList.toggle('test_display')
// })