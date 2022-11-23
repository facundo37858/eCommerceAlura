export const deleteProduct = async (id) => {
    const responce = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    })
       
    return responce
}