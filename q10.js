$(document).ready(function () {
    $(".hover1").hover(
  function () {
     $('ul.menu').slideDown('medium');
  },
  function () {
     $('ul.menu').slideUp('medium');
  }
);

     $(".menu li").hover(
  function () {
     $(this).children("ul").slideDown('medium');
  },
  function () {
    $(this).children("ul").slideUp('medium');
  }
);
});
