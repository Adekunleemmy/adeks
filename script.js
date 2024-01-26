AOS.init();

const btnOpen = document.querySelector("#open")
const navDropdown = document.querySelector("nav div ul")

function toggleStylesheet() {
const stylesheet = document.getElementById('stylesheet');
if (stylesheet.getAttribute('href') === 'styles/light.css') {
        stylesheet.setAttribute('href', 'styles/dark.css');
    } else {
        stylesheet.setAttribute('href', 'styles/light.css');
    }
}
 
btnOpen.onclick = () => {
    navDropdown.classList.toggle("test")
    if (btnOpen.classList.contains('fa-bars')) {
        btnOpen.classList.remove('fa-bars');
        btnOpen.classList.add("fa-xmark");
      } else {
        // Otherwise, remove 'class2' and add 'class1'
        btnOpen.classList.remove('fa-xmark');
        btnOpen.classList.add('fa-bars');
      }
}
