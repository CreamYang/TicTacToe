var turn = 0;
var f = 0;
$(document).ready(function () {
  $(".sb").click(function() {
    if (f != 1) {
      if (turn == 0 && $(this).text() == "") {
        turn = 1;
        $(this).text("O");
      }
      if (turn == 1 && $(this).text() == "") {
        turn = 0;
        $(this).text("X");
      }
      judgement();
    }
  });
  $('.newbutton').click(function() {
    turn=0;
    f=0;
    $('.sb').text("");
    $('.statusbar').text("");
  });
});

function judgement() {
  var result = false;
  for (var i = 1; i <= 9; i = i + 3) {
    if (result == false) {
      result = compare(i, i + 1, i + 2);
    }
  }
  for (var j = 1; j <= 3; j++) {
    if (result == false) {
      result = compare(j, j + 3, j + 6);
    }
  }
  if (result == false) {
    result = compare(1, 5, 9);
  }
  if (result == false) {
    result = compare(3, 5, 7);
  }
  if(result==false){
    if(tablefull()==true){
      $(".statusbar").text("Draw!");
    }
  }
  if (result == true) {
    if(turn==0){
      $(".statusbar").text("Player2 Win!");
    }
    if(turn==1){
      $(".statusbar").text("Player1 Win!");
    }
    f = 1;
  }
}

function compare(a, b, c) {
  a = "#b" + a;
  b = "#b" + b;
  c = "#b" + c;
  if ($(a).text() != "") {
    if ($(b).text() != "") {
      if ($(c).text() != "") {
        if ($(a).text() == $(b).text() && $(b).text() == $(c).text()) {
          return true;
        }
      }
    }
  }
  return false;
}
function tablefull(){
  var count=0;
  for(var k=1;k<=9;k++){
    var t="#b"+k;
    if($(t).text()!=""){
      count++;
    }
  }
  if(count==9){
    return true;
  }else{
    return false;
  }
}
