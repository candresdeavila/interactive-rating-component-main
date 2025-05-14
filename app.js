const ratingButtons = document.querySelectorAll('.rating-button');
const submitButton = document.querySelector('.submit-button');
const card = document.querySelector('.card');
const thankYouContainer = document.querySelector('.thank-you-container');
const thankYouRatingText = document.querySelector('.thank-you-rating');

let selectedRating = null;

// 1. Detectar selección de rating
ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Eliminar clase activa de todos los botones
        ratingButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase activa al botón seleccionado
        button.classList.add('active');
        // Guardar valor
        selectedRating = button.textContent;
    });
});

// 2. Mostrar tarjeta de Thank you al enviar
submitButton.addEventListener('click', () => {
    if (selectedRating) {
        thankYouRatingText.textContent = `You selected ${selectedRating} out of 5`;
        card.style.display = 'none';
        thankYouContainer.style.display = 'flex'; // Asegúrate que esté centrado con flex
    }
});
