$( document ).ready(function() {
 $("#game").click(function(){
  $("#bee").hide();
  }); 
function moveDown(){
var p= $("#mainplayer" );
  var position = p.position().top;
  var move= position + 100;
  p.css({ top: move});
  console.log("left: " + p.position().left + ", top: " + p.position().top);
}
function moveUp(){
  var p= $("#mainplayer" );
  var position = p.position().top;
  var move= position - 100;
  p.css({ top: move});
  console.log("left: " + p.position().left + ", top: " + p.position().top);
}
function moveLeft(){
var p = $( "#mainplayer" );
var position = p.position().left;
var move = position - 100;
p.css({ left: move});
  console.log("left: " + p.position().left + ", top: " + p.position().top);
}
function moveRight(){
var p = $( "#mainplayer" );
var position = p.position().left;
var move = position + 100;
p.css({ left: move});
 console.log("left: " + p.position().left + ", top: " + p.position().top);
}
  function shootBee(){
    $("#bee").show();
  }
document.addEventListener('keydown', function(e){
    e.preventDefault();
    if(e.keyCode === 37) {
        moveLeft();
    } else if(e.keyCode === 39) {
        moveRight();
    } else if(e.keyCode === 32) {
      shootBee();
    } else if(e.keyCode === 38) {
      moveUp();
    } else if(e.keyCode === 40){
      moveDown();
    }
  },false);
});
function checkcollison (playerPosition, objectPosition){
  if(objectPosition.top + 50 >= 480){
  var playerLeft = playerPosition.left - 20;
  var playerRight = playerPosition.left + 20;
  var objectLeft = objectPosition.left - 50;
  var objectRight = objectPosition.left + 50;
  if (playerLeft <= objectLeft && objectLeft <=playerRight){
   return true; 
  }
    if(playerLeft<=objectRight && objectRight <=playerRight){
    return true;  
    }
  }
  return false;
}