$(document).ready(function(){
	console.log("here")
	var imgs = $("img");
	var str = $( "#image" ).first().text();

	var msg = "Hover over an image below."
	imgs.each(function(){
		
		$(this).mouseenter(function() {
			 $('#image').css("background-image", 'url(' + $(this).attr( 'src' ) + ')');
			 $('#image').html($(this).attr( 'alt' ))
		 })

		 $(this).mouseleave(function() {
			$('#image').html(str)
			$('#image').css("background-image", 'url(' + '#image' + ')');


		})
	
		$(this).focus(function() {
			$('#image').css("background-image", 'url(' + $(this).attr( 'src' ) + ')');
			$('#image').html($(this).attr( 'alt' ))
		})
	
		$(this).blur(function() {
			$('#image').html(str)
			$('#image').css("background-image", 'url(' + '#image' + ')');
		})
	})})
	