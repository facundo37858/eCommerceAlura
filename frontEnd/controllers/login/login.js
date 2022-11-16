import { valida } from "./validates.js";
import { submit } from "./submit.js";

const inputs = document.querySelectorAll('input')

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
      valida(input.target);
    });
});

const inputSubmit = document.querySelector('[data-submit]')

inputSubmit.addEventListener('click',(event)=>{
    event.preventDefault()
    submit()
 
})

