const navigateToSecction = (idSecction) => {
    location.hash = "#" + idSecction;
    return
}

const naviateLogin = () => {

    if(location.pathname === '/frontEnd/components/allProducts.html'){
        location.href = 'login.html'
        return
    }
    if(location.pathname === '/frontEnd/components/formAddProduct.html'){
        location.href = './login.html'
        return
    }

    location.href = "components/login.html"
}



const linkToHome = document.querySelector('[data-link-home]')
linkToHome.addEventListener('click',() => {
    if(location.pathname !== '/frontEnd/index.html'){
        location.href = "../index.html"
    }
   
})


const iconSearch = document.querySelector('[data-icon-serach]')
const inputSearch = document.querySelector('[data-input-search]')
const buttonLogin= document.querySelector('[data-login-button]')
const containerSearch = document.querySelector('.header__search')

iconSearch.addEventListener('click', () => {

    containerSearch.classList.remove('header__search')
    containerSearch.classList.add('header__search-show')

    
    inputSearch.classList.remove('header__search__input')
    inputSearch.classList.add('header__search__input-show')

    buttonLogin ? buttonLogin.classList.add('header__button-none'):buttonLogin
    document.getElementById('search').focus()
})

inputSearch.addEventListener('blur', () =>{

    containerSearch.classList.remove('header__search-show')
    containerSearch.classList.add('header__search')

    inputSearch.classList.remove('header__search__input-show')
    inputSearch.classList.add('header__search__input')
        
    buttonLogin?buttonLogin.classList.remove('header__button-none'):buttonLogin
})