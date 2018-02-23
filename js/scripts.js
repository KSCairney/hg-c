$(document).ready(function(){
    $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 103) {
      $('#navbar').addClass('navy-fixed');
    }
    if ($(window).scrollTop() < 104) {
      $('#navbar').removeClass('navy-fixed');
    }
  });
});
