import { addProduct } from "../../../backEnd/controllers/addProduct.js"

export const submit = async ()=>{
    const inputs = document.querySelectorAll('input')
    const description = document.querySelector('[data-tipo="descripcion"]')
    const auxObj = {
        nameProduct:'',
        descripcion:description.value,
        precio:'',
        file:'',
        categoria:'',
        id:uuid.v4()
    }

    inputs.forEach(input=>{
        const typeInput = input.dataset.tipo
        if(typeInput){
            auxObj[typeInput] = input.value

        }
    })
    await addProduct(
        auxObj.nameProduct,
        auxObj.descripcion,
        auxObj.precio,
        auxObj.file,
        auxObj.categoria
    )

    return
   
    
}