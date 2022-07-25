let openBtn = document.getElementById('open-btn')
let closeBtn = document.getElementById('close-btn')
const modal = document.querySelector('.modal-overlay')

openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', openModal)

function openModal(){
  console.log('A')
  modal.classList.toggle('open-modal')
}
