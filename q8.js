$(document).ready(function(){
  $("#button1").click(function(){

  $("p").append('<button>Click</button>');
  $("button").on("click", function(){
    //alert("The paragraph was clicked.");
    $("p").append('<button>Click</button>');
    //$("a").on("click", function(){
      //  alert("The paragraph was clicked.");
   });
  });
});
