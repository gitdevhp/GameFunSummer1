const selectCard = document.querySelector('#test');
const droppedArea = document.querySelectorAll('.cardSect');

selectCard.addEventListener('dragStart', dragStart);

droppedArea.forEach(placeArea => {
    droppedArea.addEventListener('dragover', dragOver);
    droppedArea.addEventListener('drop', dragDrop);
});

let beingDragged;

function dragStart(dragged){
    beingDragged=dragged.target;    
}

function dragOver(dragged) {
    dragged.preventDefault();
}

function dragDrop(dragged) {
    console.log(dragged.target);
    dragged.target.append(beingDragged);
}