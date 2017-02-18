$(document).ready(function(){

  $("#div1").click(function(){
        alert("div clicked");
    });
  /* $(".header a").click(function(e) {
        e.stopPropagation();
   });
});*/

$('li').click(function(e){
      alert('li clicked and div disabled');
      e.stopPropagation();
   });


});
