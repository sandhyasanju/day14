function personal() {
  $("#personalInformation").show();
  $("#additionalInformation").hide();
  $("#contactInformation").hide();
  $("#qualification").hide();
  $("#finish").hide();
}
function addition() {
  $("#personalInformation").hide();
  $("#additionalInformation").show();
  $("#contactInformation").hide();
  $("#qualification").hide();
  $("#finish").hide();
}
function contact() {
  $("#personalInformation").hide();
  $("#additionalInformation").hide();
  $("#contactInformation").show();
  $("#qualification").hide();
  $("#finish").hide();
}
function qualification() {
  $("#personalInformation").hide();
  $("#additionalInformation").hide();
  $("#contactInformation").hide();
  $("#qualification").show();
  $("#finish").hide();
}
function finish(){
    $("#personalInformation").hide();
    $("#additionalInformation").hide();
    $("#contactInformation").hide();
    $("#qualification").hide();
    $("#finish").show();
}
$(document).ready(function(){
$("#button1").click(function(){
  $("#personalInformation").hide();
  $("#additionalInformation").show();
});
$("#button2").click(function(){
  $("#personalInformation").show();
  $("#additionalInformation").hide();
});
$("#button3").click(function(){
  $("#additionalInformation").hide();
  $("#contactInformation").show();
});
$("#button4").click(function(){
  $("#contactInformation").hide();
  $("#additionalInformation").show();
});
$("#button5").click(function(){
  $("#contactInformation").hide();
  $("#qualification").show();
});
$("#button6").click(function(){
  $("#qualification").hide();
  $("#contactInformation").show();
});
$("#button7").click(function(){
  $("#qualification").hide();
  $("#finish").show();
});
$("#button8").click(function(){
  alert("aa fields must be filled");
});
$("#button9").click(function(){
  $("#finish").hide();
  $("#qualification").show();
});
$("#button10").click(function(){
  $("#alert").show();
  $("#checkbox").change(function(){
    alert("Thank You for registering with us....,");
  });
});
});
