const menuLinks = document.querySelector(".navbar__menu")
const menu = document.querySelector("#mobile-menu");
const navLogo = document.querySelector("#navbar__logo");


// Display Mobile Menu
const mobileMenu = () => {
    menuLinks.classList.toggle("active");
    menu.classList.toggle("is-active");
};
menu.addEventListener("click",mobileMenu);

//Show active nav bar item when scrolling
const highlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const servicesMenu = document.querySelector("#service-page");
    let scrollPos = window.scrollY;

//Adds the hightligth class to my menu item
if(window.innerWidth >960 && scrollPos < 700){
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return
}
if(window.innerWidth >960 && scrollPos < 1500){
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return
}
if(window.innerWidth >960 && scrollPos < 2200){
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return
}
if((elem && window.innerWidth <960 && scrollPos < 600) || elem){
    elem.classList.remove("highlight");
}
}
window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);



// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => { 
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 800 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
}
}
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);