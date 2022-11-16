export const showModal = (mensaje) => {
    const modalSection = document.querySelector('.modal')
    const mensajeText = document.querySelector('[data-mensaje]')
    mensajeText.innerHTML=mensaje
    // console.log(mensajeText)
    modalSection.classList.add('modal--show')
    const btnBack = document.querySelector('[data-btn-back]')
    btnBack.addEventListener('click',()=>{
        modalSection.classList.remove('modal--show')
    })
    // console.log(modalSection)
    return
    
}