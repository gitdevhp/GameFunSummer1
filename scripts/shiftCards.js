const draggable = document.querySelectorAll('.card');
const dropArea = document.querySelectorAll('.cardSect');

draggable.forEach((card) => {
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
        const curCard = document.querySelector('is-dragging');

        if(!bottomTask){
            zone.appendChild('curCard');
        } else {
            zone.insertBefore(curCard,bottomTask)
        }
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
    return closestCard;
};