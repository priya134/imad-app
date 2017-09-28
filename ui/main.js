console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='new value';
var img=document.getElementById('madi');
var marginleft=0;
function moverght(){
    marginleft=marginleft+10;
    img.stle.marginleft=marginleft+'px';
    var interval=setInterval(moveright,100);
}