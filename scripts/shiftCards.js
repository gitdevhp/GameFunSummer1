const draggables = document.querySelectorAll('.card');
const dropArea = document.querySelectorAll('.cardSect');

draggables.forEach((card) => {
    card.addEventListener("dragstart", () => {
        card.classList.add('is-dragging');
    });
    card.addEventListener("dragend", () => {
        card.classList.remove('is-dragging');
    });
});