
$(document).ready(function(){

    $('#ch4form').submit(function() {
        var validInput = true;
        var name = $('#fullname');
        var address = $('#streetaddr');
        console.log("Here");
        console.log(name);
        console.log(address)
        if (name.val().length == 0){
            $('#nameerrormsg').show();
            validInput = false;
        }
        else {
            $('#nameerrormsg').hide();
        }

        if (address.val().length == 0){
            $('#addrerrormsg').show();
            validInput = false;
        }
        else {
            $('#addrerrormsg').hide();
        }

        return validInput;
})})