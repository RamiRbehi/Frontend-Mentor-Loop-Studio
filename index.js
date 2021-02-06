$(document).ready(function() {
$(".images-list").hide();

$(".btn").click(function(){
  if ( $( ".images-list" ).first().is( ":hidden" ) ) {
   $( ".images-list" ).toggle( "slow" );
 } else {
   $( ".images-list" ).hide("slow");
 }
  $(this).addClass("move");
});
});

$(document).ready(function() {
$(".navbar-toggler").click(function (event) {
  $(".new-bg, .list, .burger, .close").toggleClass("active");
});
});
