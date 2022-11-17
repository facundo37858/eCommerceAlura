import { showModal } from "./modal.js"

export const submit = () => {
    const inputUser = document.querySelector('[data-tipo="user"]')
    const inputPassword= document.querySelector('[data-tipo="password"]')

    if(inputPassword.validity.valid && inputUser.validity.valid){
        location.href='addProduct.html'
    }
    if(!inputPassword.value && !inputUser.value){
        showModal('Ingrese datos')
    }
}