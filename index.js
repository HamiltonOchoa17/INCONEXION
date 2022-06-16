const btnMenu = document.querySelector("#btn-menu");
const mainNav= document.querySelector("#main-nav");
btnMenu.addEventListener("click", function(){
    mainNav.classList.toggle("mostrar");
});
