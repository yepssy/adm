function alerte(){
  alert("Hey what you do expect ?");
  return false
}

function so(){
  i ++;
  if (i == 6) {
    alert("Easter Eggs :  Oh Tourniquet !! ")
    var ee = true
  }
}
function stay(){
  if (ee == true) {
    alert("Reste avec nous stp ! ")
  } else {
    alert("Reste avec nous stp ! P-S : Ya un easter egg !!")
  }
}

function rotateCmd(){
  var img = document.getElementById("rotate");
  var t = img.style.transform.match(/(\d+)/g) || [0];
  val = ( t[0] *1 +1) % 360 * ( Number(sens) * 2 - 1 );
  img.style.transform = 'rotate(' +val +'deg)'

  if (val == 359 || val == -359) {
    clearInterval(interv);
    delete(interv);
    val = 0;
  }
}

function rotate(){
  if (typeof interv == "undefined") {
    sens =! sens;
    so();
    interv = setInterval(rotateCmd, 5)
  }
}

function next(){
  if (n < 2500) {
    n = n * 1.25;
  }

  document.images[X].style.display = "none" ;
  if ( X < Xm )
    X++;
  else
    X=0;
  document.images[X].style.display = "initial";
  setTimeout(next, n) ;
}

function responsive(){
  
  if (document.body.clientWidth <= 900) {
    let colleft = document.getElementsByClassName("column-left");
    let i;
    for (i = 0; i < colleft.length; i++) {
      colleft[i].style.width = "auto";
    }

    let colmain = document.getElementById("main-column");
    colmain.style.width = "auto";

    let colaside = document.getElementById("aside-column");
    colaside.style.width = "auto";

    
    let crpaside = document.getElementsByClassName("corps-aside");
    for (i = 0; i < crpaside.length; i++) {
      crpaside[i].style.padding = "1% 5%";
    } 
  }
}


//document.oncontextmenu =alerte;
//document.onselectstart=alerte;
document.onunload=stay;

setTimeout(responsive, 5000)
alert(screen.width)
var sens = false;
var ee = false;
i = 0;
Xm = 3 ;
X = 0 ;
var n = 25;
setTimeout(next, 460);
