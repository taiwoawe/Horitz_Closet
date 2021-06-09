
window.addEventListener('scroll', ()=>{
    const scrollTop = document.querySelector('.scroll-btn');
    if(this.scrollY >= 560){
        scrollTop.classList.add('show-scroll')
    }else{
        scrollTop.classList.remove('show-scroll')
    }
})

const navMenu = document.querySelector('.nav-menu')
const nav = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav-link')

nav.addEventListener('click', ()=>{
    navMenu.classList.toggle('show-menu')
})

navLink.forEach(item =>{
    item.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
})

window.addEventListener('scroll', ()=>{
    const nav = document.querySelector('.header')
    if(window.scrollY >= 200){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
})


const footer = document.querySelector('.footer-container')

const date = new Date().getFullYear()

footer.innerHTML = `<p> Copyright <i class="far fa-copyright"></i> ${date} All rights reserved `