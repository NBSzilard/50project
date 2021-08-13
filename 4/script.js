const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const frm=document.querySelector('f1')

btn.addEventListener('click', () => {
    this.stopPropagation;   
    search.classList.toggle('active')
    input.focus()
})

frm.addEventListener('submit', () => {
    search.classList.toggle('active')
})