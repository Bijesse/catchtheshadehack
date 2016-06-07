$( document ).ready(function() {
 setInterval (animate,1000);
  $("#game").click(function(){
  $("#bee").hide();
  }); 
function moveDown(){
var p= $("#mainplayer" );
  var position = p.position().top;
  var move= position + 50;
  p.css({ top: move});
  console.log("left: " + p.position().left + ", top: " + p.position().top);
}
function moveUp(){
  var p= $("#mainplayer" );
  var position = p.position().top;
  var move= position - 50;
  p.css({ top: move});
  console.log("left: " + p.position().left + ", top: " + p.position().top);
}
function moveLeft(){
var p = $( "#mainplayer" );
var position = p.position().left;
var move = position - 50;
p.css({ left: move});
  console.log("left: " + p.position().left + ", top: " + p.position().top);
}
function moveRight(){
var p = $( "#mainplayer" );
var position = p.position().left;
var move = position + 50;
p.css({ left: move});
 console.log("left: " + p.position().left + ", top: " + p.position().top);
}
  function shootBee(){
    var p= $("#mainplayer");
    var left = p.position().left;
    var top = p.position().top;
    $("#bee").css({ left: left});
   $("#bee").css({ top: top - 30});
    $("#bee").show(500);
  }
document.addEventListener('keydown', function(e){
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
  console.log (objectPosition.top);
  if(objectPosition.top + 50 >= 480){
  var playerLeft = playerPosition.left - 50;
    console.log(playerLeft, "playerLeft");
  var playerRight = playerPosition.left + 50;
    console.log(playerRight, "playerRight");
  var objectLeft = objectPosition.left - 50;
    console.log(objectLeft, "objectLeft");
  var objectRight = objectPosition.left + 50;
    console.log(objectRight, "objectRight");
  if (playerLeft <= objectLeft && objectLeft <=playerRight){
   return true; 
  }
    if(playerLeft<=objectRight && objectRight <=playerRight){
    return true;  
    }
  }
  return false;
}
function animate() {
  
$(".lemonade").each(function(){
  var top;
top = $(this).position().top ;
if (top < 450) {
top=top+175;
$(this).css({top: top});
}
    else {
    $( this ).remove();
  }
  if (checkcollison($("#mainplayer").position(),$(this).position())
     ) {
 var currentScore= parseInt($(".score").text());
  var score=  currentScore + 4;
  $(".score").text(score);
    }
  
});
  
  
  
  var random=Math.random();
  var count=$(".lemonade").length;
  if (random<=0.7) {
    var clone=$("#gameboard").append('<img src="http://www.drdeborahbaker.com/wp-content/uploads/2014/07/lemon.png" class="lemonade">');
    clone.hide();
    
    var random1=((Math.random() * 800) + 200);
    var last = $(".lemonade").last();
    last.css("left", random1);
   clone.show();

  }
}