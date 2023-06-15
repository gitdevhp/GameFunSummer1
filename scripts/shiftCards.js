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

dropArea.forEach((zone) => {
    area.addEventListener("dragover",(e) => {
        e.preventDefault();

        const bottomTask = insertAboveTask(zone, e.clientY);
    });
});

const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".card:not('.is-dragging')");
    let closestCard = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach((card) => {
        const { top } = card.getBoundingClientRect();
        const offset = mouseY - top;
        if(offset<0&& offset>closestOffset){
            closestOffset = offset;
            closestCard = card;
        }
    });
    
};