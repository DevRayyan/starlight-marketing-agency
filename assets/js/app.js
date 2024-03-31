const navBtn = document.querySelector(".nav-toggle button");
const Navbar = document.querySelector("#top-header");
const libBtn = document.querySelectorAll(".lib_btn_trigger button");
const libScreen = document.querySelectorAll(".lib_screens .lib_src");

navBtn.addEventListener('click', () => {
    Navbar.classList.toggle('collapse');
    if (!Navbar.classList.contains('collapse')) {
        navBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        navBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
});
libBtn.forEach((element, i) => {
    element.addEventListener('click', () => {
        libScreen.forEach(screen => {
            screen.classList.remove('active');
        });
        libBtn.forEach(elem => {
            elem.classList.remove('active');
        });
        libScreen[i].classList.add('active');
        libBtn[i].classList.add('active');

    })
});
console.log(libScreen)