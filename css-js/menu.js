function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

function closeMenu() {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu span a');
    const hamburger = document.querySelector('.hamburger');

    // Ferme le menu en cliquant sur un lien
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Ferme le menu en cliquant en dehors
    document.addEventListener('click', (e) => {
      const menu = document.querySelector('.menu');
      const isClickInsideMenu = menu.contains(e.target);
      const isClickOnHamburger = hamburger.contains(e.target);

      if (!isClickInsideMenu && !isClickOnHamburger) {
        closeMenu();
      }
    });
});