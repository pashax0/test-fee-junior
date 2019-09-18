let mainMenu = document.querySelector('.main-menu')
document.onclick = (e) => {
    if (e.target.className == "burger-btn") {
        mainMenu.classList.toggle("visible");
    } else {
        mainMenu.classList.remove("visible");
    }
};