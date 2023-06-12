function gameSet(nextLoadedScene){
    console.log('ok');
    document.getElementById('pageHideShow').style.display='block';
    document.getElementsByClassName('trans1')[0].style.animationPlayState='running';
    document.getElementsByClassName('trans1')[1].style.animationPlayState='running';
    setTimeout((nextLoadedScene) => {
        nextLoadedScene;
    }, 3000);
    setTimeout(() => {
        document.getElementsByClassName('trans1')[0].style.animationPlayState='initial';
        document.getElementsByClassName('trans1')[1].style.animationPlayState='initial';
        document.getElementsByClassName('trans1')[0].style.animationPlayState='paused';
        document.getElementsByClassName('trans1')[1].style.animationPlayState='paused';
        document.getElementById('pageHideShow').style.display='none';
      }, 7000);
}

function gamePlay() {
    console.log('arrived');
    document.getElementById('loaded').style.display='none';
    document.getElementById('mainScr').style.display='block';
}