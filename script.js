document.addEventListener("DOMContentLoaded", function() {
    const el = document.getElementById("typewriter");
    const texts = ["Desenvolvedor Web", "Desenvolvedor Front End"];
    let textIndex = 0;
    let i = 0;
    let isDeleting = false;

    el.innerHTML = "<b></b>";

    function type() {
        const currentText = texts[textIndex];
        const b = el.querySelector("b");

        if (!isDeleting) {
            b.textContent = currentText.substring(0, i);
            if (i < currentText.length) {
                i++;
                setTimeout(type, 90);
            } else {
                isDeleting = true;
                setTimeout(type, 1200); // Espera antes de apagar
            }
        } else {
            b.textContent = currentText.substring(0, i);
            if (i > 0) {
                i--;
                setTimeout(type, 50);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500); // Espera antes de começar a digitar o próximo
            }
        }
    }
    type();
});

function MenuLateral() {
    const menu = document.querySelector('.menulateral');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
    const navbarContainer = document.querySelector('.menulateral .navbar-container');
    if (navbarContainer) {
        navbarContainer.style.display = (navbarContainer.style.display === 'flex') ? 'none' : 'flex';
    }   
    const menuButton = document.querySelector('.menubutton');
    if (menuButton) {
        menuButton.style.display = (menuButton.style.display === 'none') ? 'block' : 'none';
    }
    const menuIcon = document.querySelector('.menuicon');
    if (menuIcon) {
        menuIcon.classList.toggle('open');
    }
    const menuText = document.querySelector('.menutext');
    if (menuText) {
        menuText.style.display = (menuText.style.display === 'none') ? 'block' : 'none';
    }
}
