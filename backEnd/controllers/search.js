export const searchProduct = async (name) => {
    const data = await fetch(`http://localhost:3000/products?title=${name}`)
    .then(data => data.json())
    
    return data
}