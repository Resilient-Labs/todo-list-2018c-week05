document.getElementById("cow").onclick = cowMoovement;
document.getElementById("chicken").onclick = chickenDance;
document.getElementById("mama").onclick = mamaDance;


function cowMoovement() {
  //move image in a random direction
  var cow = document.getElementById("cow");
  var upDown = Math.floor(Math.random() * 500);
  var leftRight = Math.floor(Math.random() * 700);
  var audio = document.getElementById("cAudio");
  cow.style.top = upDown + "px";
  cow.style.left = leftRight + "px";
  audio.play();
}

function chickenDance() {
  //move image in a random direction
  var chicken = document.getElementById("chicken");
  var upDown = Math.floor(Math.random() * 500);
  var leftRight = Math.floor(Math.random() * 700);
  var audio = document.getElementById("chAudio");
  chicken.style.top = upDown + "px";
  chicken.style.left = leftRight + "px"
  audio.play()
  // also make audio for that animal playco
}
function mamaDance() {
  //move image in a random direction
  var llama = document.getElementById("mama");
  var upDown = Math.floor(Math.random() * 500);
  var leftRight = Math.floor(Math.random() * 700);
  var audio = document.getElementById("aAudio");
  llama.style.top = upDown + "px";
  llama.style.left = leftRight + "px"
  audio.play()
}
// function chickenDance(){
// chicken.style.top = upDown + "px"
// }

// function mamaDance(){

// }



C