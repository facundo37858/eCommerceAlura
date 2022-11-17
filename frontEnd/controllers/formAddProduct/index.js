import { valida } from "../validates.js";

const inputs = document.querySelectorAll('input')
const textareaDescripcion = document.querySelector('#descripcion')

textareaDescripcion.addEventListener('blur',()=>{
    valida(textareaDescripcion)
})

inputs.forEach((input) => {
    if(input.dataset.tipo === 'file'){
        input.addEventListener('change',(input) => {
            console.log(input.target.dataset.tipo)
            input.target.classList.remove("input-container--invalid");
            input.target.classList.add('exito')
            const span =document.querySelector(`.input-message-error-${input.target.dataset.tipo}`)
            
            span.innerHTML = "Archivo cargado con exito";
            span.classList.add('exito')
            
        })
    }
    input.addEventListener("blur", (input) => {
      valida(input.target);
    });
});