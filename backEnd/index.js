import { searchProduct } from "./controllers/search.js"

const searchButton = document.querySelector('[data-icon-serach]')
const verTodo = document.querySelectorAll('[data-verTodo]')
const formAddPrroduct = document.querySelector('[data-form-addProduct]')

verTodo.forEach(element=>{
    element.addEventListener('click',async() => {
        // const allProducts = await getAllProducts()
        location.href="components/allProducts.html"
        // console.log(allProducts)
    })
})

searchButton ? searchButton.addEventListener('click',async ()=>{
    const searchValue = document.querySelector('[data-input-search]')

    if(searchValue.value){
        const data = await searchProduct(searchValue.value.toUpperCase())
        data.length ?
        console.log(data):
        console.log('NOT FOUND')
    }
}) : null