const mainContentSection = document.querySelector('h2')
mainContentSection.style.color = 'red'

const aboutA = document.getElementById('about')
aboutA.style.color = 'blue'

const contact = document.querySelector('#contact')

contact.addEventListener('mouseover', () => {
    //contact.parentElement.style.backgroundColor = 'lightblue'
    contact.closest('nav').style.backgroundColor = 'lightblue'
})
