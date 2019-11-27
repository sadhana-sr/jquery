$(document).ready(function(){
	$('#useBilling').click(function() {
			var home = $('#home');
			var billing = $('#billing');
			if ($(this).is(":checked")) {
				home.val(billing.val());
				home.prop("disabled", true);

			}
			if (!$(this).is(':checked')) {
				home.val("");
				home.prop("disabled", false);
			
	}})})