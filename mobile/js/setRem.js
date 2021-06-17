setRem();
function setRem(){
    var htmlWidth = document.querySelector('html');
    var winWidth = window.innerWidth;
    if(winWidth>750){
        winWidth = 750;
    }
    if(winWidth<320){
        winWidth = 320;
    }
    var w = winWidth / 10;
    // console.log(w);
    htmlWidth.style.fontSize = w+"px";
}
window.onresize=window.onload=function(){
    setRem();
}
