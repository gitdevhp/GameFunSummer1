const splashArr = ["Don't Lose", "U winnin' son?", "They are in my walls", 
"To be a conspiracy or to not be a conspiracy"];

//basic homepage settings
function gameSet(firstSce, secondSce){
    console.log('ok');
    document.getElementById("splashText").innerHTML=splashArr[Math.floor(Math.random()*splashArr.length)];
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
    setInterval(() => {
        document.getElementById('splashText').style.display='block';
        document.getElementById('splashText').style.animationPlayState='running';
        setInterval(() => {
            document.getElementById('splashText').style.animationPlayState='paused';
            document.getElementById('splashText').style.display='none';
        }, 3000);
    }, 1500);
    setInterval(() => {
        document.getElementById('splashText').style.display='none';
        //had to add cuz idfk why not hiding fast enough
        document.getElementById('splashText').style.visibility='hidden';  
    }, 4500);
}

function gamePlay(firstSce, secondSce) {
    console.log('arrived');
    document.getElementById(firstSce).style.display='none';
    document.getElementById(secondSce).style.display='block';
}

function openSetting() {
    document.getElementById('setPage').style.display='block';
    document.getElementById('setBut').style.display='none';
}

function closeS() {
    document.getElementById('setPage').style.display='none';
    document.getElementById('setBut').style.display='block';
}

//game start and functions
