// Ajout du comportement de défilement fluide
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('span a');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut

        // Récupère l'ID de la section cible
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          // Défile jusqu'à la section avec un comportement fluide
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
});