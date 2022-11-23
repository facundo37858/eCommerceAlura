export const addProduct = async (title, description,price,url_img,category) => {
    const responce = await fetch(`http://localhost:3000/products`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            title, 
            description,
            price,
            url_img,
            category,
            id: uuid.v4()
        })
    })
    
    
    return responce
}