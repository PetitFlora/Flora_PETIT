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

    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
      const menu = document.querySelector('.menu');
      const isClickInsideMenu = menu.contains(e.target);
      const isClickOnHamburger = hamburger.contains(e.target);

      if (!isClickInsideMenu && !isClickOnHamburger) {
        closeMenu();
      }
    });
});