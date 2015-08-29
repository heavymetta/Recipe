$(document).ready(function() {
	$( "#hider" ).click(function() {
  $( "span:last-child" ).hide( "fast", function() {
    $( this ).prev().hide( "fast", arguments.callee );
  });
});
$( "#shower" ).click(function() {
  $( "span" ).show( 2000 );
});
});

$( document ).click(function() {
  $( "#toggle" ).toggle( "highlight" );
});



