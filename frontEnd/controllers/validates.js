
export const valida = (input) =>{
  const typeInput = input.dataset.tipo
  console.log("🚀 ~ file: validates.js ~ line 4 ~ valida ~ typeInput", typeInput)
  
  if (input.validity.valid) {
    input.classList.remove("input-container--invalid");
    document.querySelector(`.input-message-error-${typeInput}`).innerHTML = "";

  } else if(typeInput) {
    console.log(typeInput,'typeinput')
    input.classList.add("input-container--invalid");
    document.querySelector(`.input-message-error-${typeInput}`).innerHTML = mostrarMensajeDeError(typeInput, input);
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
  categoria:{
    valueMissing: "El campo categoria no puede estar vacío",

  },
  nameProduct:{
    valueMissing: "El campo nombre del producto no puede estar vacío",

  },
  precio:{
    valueMissing: "El campo precio no puede estar vacío",
    typeMismatch: "Solo numeros",
    patternMismatch: "Solo numeros",

  },
  descripcion:{
    valueMissing: "El campo descripcion no puede estar vacío",
  },
  file:{
    valueMissing: "El campo file no puede estar vacío",
  }
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


