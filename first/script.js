
// Obtenir toutes les modales
const modals = document.querySelectorAll('.modal');
// Obtenir les liens pour ouvrir les modales
const openModalLinks = document.querySelectorAll('.open-modal');
// Obtenir tous les boutons de fermeture
const closeButtons = document.querySelectorAll('.close');

// Fonction pour ouvrir la modale
openModalLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const modalId = this.getAttribute('data-modal'); // Récupère l'ID de la modale à ouvrir
        const modal = document.getElementById(modalId); // Trouver la modale correspondante
        if (modal) {
            modal.style.display = "block"; // Afficher la modale
        }
    });
});

// Fonction pour fermer la modale
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal'); // Trouver la modale parente
        modal.style.display = "none"; // Fermer la modale
    });
});

// Fermer la modale en cliquant à l'extérieur du contenu
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none"; // Fermer la modale si on clique en dehors
        }
    });
});

