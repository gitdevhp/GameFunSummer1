const selectCard = document.querySelector('.card');
const droppedArea = document.querySelectorAll('.cardSect');

selectCard.addEventListener('dragstart', dragStart);

droppedArea.forEach(placeArea => {
    droppedArea.addEventListener('dragover', dragOver);
    droppedArea.addEventListener('drop', dragDrop);
});

let beingDragged;

function dragStart(dragged){
    console.log(beingDragged);
    beingDragged=dragged.target;    
}

function dragOver(dragged) {
    dragged.preventDefault();
}

function dragDrop(dragged) {
    console.log(dragged.target);
    dragged.target.append(beingDragged);
}