const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('selected'); 
    hamburger.classList.toggle('active'); 
}
hamburger.addEventListener('click', toggleMenu);