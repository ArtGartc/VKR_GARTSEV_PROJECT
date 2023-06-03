const navbar = document.querySelector(".nav_bar_about") 
const ul = document.querySelector(".nav_bar_about_list")
const navbarName = document.querySelector(".nav_bar_about_name") 
const navbarArrow = document.querySelector(".nav_bar_about_arrow") 



const displayUl = (evt)=>{
    if(evt.target == navbar || evt.target == navbarName || evt.target == navbarArrow){
    if(ul.style.display == "block"){
        ul.style.display = "none"
        navbarArrow.style.transform = "none"
    }else{
        ul.style.display = "block"
        navbarArrow.style.transform = "rotate(180deg)"
        
    }
    }
}
navbar.addEventListener("click",displayUl)

const aboutButton = document.querySelector(".about_button")
const aboutList = document.querySelector(".about_list")
const displayList = ()=>{
    if(aboutList.style.display == "flex"){
        aboutList.style.display = "none"
    }else{
        aboutList.style.display = "flex"
    }
}
aboutButton.addEventListener("click",displayList)


const burger = document.querySelector(".burger")
const menu = document.querySelector(".popup")
const burgerImg = document.querySelector(".burger_img")
const navbarMobile = document.querySelector(".navbar_mobile")
const displayMenu = ()=>{
    if(menu.style.display == "flex"){
        menu.style.display = "none"
        burgerImg.src = "/navigation/components/menu-hamburger-svgrepo-com.svg"
        burgerImg.style.width = "49px"
        burgerImg.style.height = "54px"
        navbarMobile.style.position = "relative"
    }else{
        menu.style.display = "flex"
        burgerImg.src = "/navigation/components/close-1511-svgrepo-com (1).svg"
        burgerImg.style.width = "39px"
        burgerImg.style.height = "49px"
        navbarMobile.style.position = "fixed"
        navbarMobile.style.top = "0%"
    }
}
burger.addEventListener("click",displayMenu)