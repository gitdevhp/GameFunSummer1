function gameSet(firstSce, secondSce){
    console.log('ok');
    document.getElementById('pageHideShow').style.display='block';
    document.getElementsByClassName('trans1')[0].style.animationPlayState='running';
    document.getElementsByClassName('trans1')[1].style.animationPlayState='running';
    setTimeout(() => {
        gamePlay(firstSce, secondSce);
    }, 3000);
    setTimeout(() => {
        document.getElementsByClassName('trans1')[0].style.animationPlayState='initial';
        document.getElementsByClassName('trans1')[1].style.animationPlayState='initial';
        document.getElementsByClassName('trans1')[0].style.animationPlayState='paused';
        document.getElementsByClassName('trans1')[1].style.animationPlayState='paused';
        document.getElementById('pageHideShow').style.display='none';
      }, 7000);
}

function gamePlay(firstSce, secondSce) {
    console.log('arrived');
    document.getElementById(firstSce).style.display='none';
    document.getElementById(secondSce).style.display='block';
}