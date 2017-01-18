$(document).ready(function() {

  $('.h1').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
        $(this).removeClass('animated bounce');
      });
  $('.hard').addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
        $(this).removeClass('animated hinge');
      });

    $('.box1').click(function(){
      $('.ca ').addClass('animated rollIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
        $(this).removeClass('animated rollIn');
      });
      $('.ca ').show();
      $('.ido ').hide();
      $('.cont ').hide();

    });
    $('.container').click(function(){
      $('.ca').hide();
    });

    $('.box2').click(function(){
      $('.ido ').addClass('animated rollIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
        $(this).removeClass('animated rollIn');
      });
      $('.ido ').show();
      $('.ca ').hide();
      $('.cont ').hide();

    });
    $('.container').click(function(){
      $('.ido').hide();
    });

    $('.box3').click(function(){
       $('.cont ').addClass('animated rollIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
        $(this).removeClass('animated rollIn');
      });
      $('.cont ').show();
      $('.ca ').hide();
      $('.ido ').hide();

    });
    $('.container').click(function(){
      $('.cont').hide();
    });

});


