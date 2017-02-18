/*$(document).ready(function(){
    $("button").click(function(){
      $.get("temp.asp", function(data, status){

        /*if(status == "success")
        {   alert("hjhv");
           $(this).closest('tr').remove();
         }
        else {
          alert("Error: ");
        }
        alert("Data: " + data + "\nStatus: " + status);
    });
    });
  });*/
  $(document).ready(function(){
    $("button").click(function(){

        $.get("temp.asp",function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});
