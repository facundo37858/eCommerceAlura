import { searchProduct } from "./controllers/search.js"

const request = await searchProduct('YYYY')

const searchButton = document.querySelector('[data-icon-serach]')

searchButton.addEventListener('click',async ()=>{
    const searchValue = document.querySelector('[data-input-search]')

    if(searchValue.value){
        const data = await searchProduct(searchValue.value.toUpperCase())
        data.length ?
        console.log(data):
        console.log('NOT FOUND')
    }
})
