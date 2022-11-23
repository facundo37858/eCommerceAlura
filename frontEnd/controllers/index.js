const navigateToSecction = (idSecction) => {
    location.hash = "#" + idSecction;
    return
}

const naviateLogin = () => {
    location.href = "components/login.html"
}

const linkToHome = document.querySelector('[data-link-home]')
linkToHome.addEventListener('click',()=>{
    if(location.pathname !== '/frontEnd/index.html') location.href = "../index.html"
})
