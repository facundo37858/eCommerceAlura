export const getAllProducts = async () => {
    const data = await fetch(`http://localhost:3000/products`)
    .then(data => data.json())
    
    return data
}