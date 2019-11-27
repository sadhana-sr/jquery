$(document).ready(function(){

$('#ch3form').submit(function() {
    console.log('submit')
    var fruit = $('input[name=fruit]');
    console.log(fruit)
    var standing = $('input[name=standing]');

    fruit.each(function(){
        console.log('checked?')
        if ($(fruit).is(":checked")) { /*if fruit checked*/      
            console.log('fruit checked')

            if ($(standing).is(":checked")) { /*if standing checked*/  
                    console.log('standing checked')
                    $("challenge4.html").submit = true;
                }
            else{
                    console.log('standing not checked')
                    alert("You must pick a standing!")
                    $("challenge4.html").submit = false;
                }
 
        }
        else{             /*if fruit is not checked*/  
            if ($(standing).is(":checked")) {
                console.log('standing checked')
                alert("You must pick a fruit!")

                $("challenge4.html").submit = false;
            }
            else{
                console.log('neither checked')
                alert("You must pick a standing and a fruit!")

                $("challenge4.html").submit = false;
            }
        }

    

 

})
})

})