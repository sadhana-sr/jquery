$(document).ready(function(){

$('#subscribe').click(function() {
	var x = $("#emailField");
	if ($(this).is(":checked")) {
		console.log("selected");
    	x.show();
  	} else {
  		console.log("Not selected");
		  x.hide();
  	}


  	// Advanced Option....
//   	x.style.display == "block" ? 
//		x.style.display = "none" : 
// 		x.style.display = "block"; 


}
)
})