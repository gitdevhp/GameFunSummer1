function gameSet(){
    document.getElementById('pageHideShow').style.display='block';
    document.getElementsByClassName('trans1').style.animationPlayState='running';
    setTimeout(() => {
        gamePlay();
    }, 3000);
    setTimeout(() => {
        document.getElementsByClassName('trans1').style.animationPlayState='initial';
        document.getElementsByClassName('trans1').style.animationPlayState='paused';
      }, 6000);
}

function gamePlay() {
    console.log('arrived');
    document.getElementById('loaded').style.display='none';
    document.getElementById('mainScr').style.display='block';
}