
export const valida = (input) =>{
  const typeInput = input.dataset.tipo
 
  if (input.validity.valid) {
    input.classList.remove("input-container--invalid");
    document.querySelector(".input-message-error-password").innerHTML = "";
    document.querySelector(".input-message-error-user").innerHTML = "";

  } else {
    input.classList.add("input-container--invalid");
    
    if(typeInput === 'user') document.querySelector(".input-message-error-user").innerHTML = mostrarMensajeDeError(typeInput, input);

    if(typeInput === 'password') document.querySelector(".input-message-error-password").innerHTML = mostrarMensajeDeError(typeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
]

const mensajesDeError = {
  user: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch:
      "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  },

}

const mostrarMensajeDeError=(tipoDeInput, input) =>{
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      // console.log(tipoDeInput, error);
      // console.log(input.validity[error]);
      // console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}


