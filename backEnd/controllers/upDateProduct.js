export const upDateProduct = async (id,title,description,price,url_img,category) => {
    const responce = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description,price,url_img,category})

    })
       
    return responce
}