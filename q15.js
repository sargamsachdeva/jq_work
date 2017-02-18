/*$(document).ready(function(){
    $("button").click(function(){
    console.log("V");
    $("#table td.age").filter(function () {
        return parseInt($(this).text(), 10) > 10;

    }).addClass("changecolor");
});
});
});*/
$(document).ready(function(){
    $("button").click(function(){
        console.log("Disabling the button");
        //$("#submit").attr('disabled','disabled');
        $("#table td.age").filter(function () {
            return parseInt($(this).text(), 10) > 10;

        }).addClass("changecolor");


    });
});
