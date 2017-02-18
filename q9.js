$(document).ready(function(){
$('#drop').change(
    function() {

        
        $("div").append($('#drop option:selected').val());

    });
});
