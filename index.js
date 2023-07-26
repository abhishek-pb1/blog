const navToggler = document.querySelector(".mobile-nav-toggler");
const navMenu = document.querySelector(".nav-menu");


navToggler.addEventListener("click", () => {
    const visibility = navMenu.getAttribute("data-visible");

    if(visibility === "false") {
        navMenu.setAttribute("data-visible", "true");
        navToggler.style.top = '4.5vh';
        navToggler.style.right = '3vh';
        navToggler.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    }

    else if (visibility === "true") {
        navMenu.setAttribute("data-visible", "false");
        navToggler.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
})
