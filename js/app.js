$(document).ready(function() {

  $('.h1').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
        $(this).removeClass('animated bounce');
      });
  $('.hi').addClass('animated rotateIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
        $(this).removeClass('animated rotateIn');
      });
  $('.ho').addClass('animated rotateOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
        $(this).removeClass('animated rotateOut');
      });

  $('.box1').click(function(){
    $('html, body').animate({
            scrollTop: $(".app").offset().top
        }, 2000);
   
  });

  $('.box2').click(function(){
    $('html, body').animate({
            scrollTop: $(".ido").offset().top
        }, 2000);
   
  });

  $('.box3').click(function(){
    $('html, body').animate({
            scrollTop: $(".cont").offset().top
        }, 2000);
   
  });

});


