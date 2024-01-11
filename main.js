/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

// dropdown script
function toggleProductMenu(show) {
    const productMenu = document.querySelector('.product-menu');
    if (show) {
        productMenu.classList.remove('opacity-0', 'scale-y-0');
        productMenu.classList.add('opacity-100', 'scale-y-100');
    } else {
        productMenu.classList.remove('opacity-100', 'scale-y-100');
        productMenu.classList.add('opacity-0', 'scale-y-0');
    }
}

// hamburger
function Menu(e) {
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close", list.classList.
        add('top-[80px]'), list.classList.add('opacity-100')
    ) : (e.name = "menu", list.classList.remove('top-[80px]')
        , list.classList.remove('opacity-100'))
}