$(document).ready(function(){
    $("#submit").click(function(){
        console.log("Disabling the button");
        $("#submit").attr('disabled','disabled');


    });
});
