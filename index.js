$(document).ready(function(){
$("h1").on("click",function () {
$("h1").css("color","purple");
});
$("#hide").after('<button id="show">Show</button>');
$("#hide").on("click", function() {
    $("h1").slideToggle();
});
$("h1").on("mouseleave", function() {
    $("h1").fadeOut();
});

var k = 0;
if(k === "0"){
    $("h1").css("color","green");
}
});
