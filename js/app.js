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
      $('.ca ').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
        $(this).removeClass('animated fadeInUp');
      });
      $('.ca ').show();
      $('.ido ').hide();
      $('.cont ').hide();
      $('.hard ').hide();

    });
    $('.container').click(function(){
      $('.ca').hide();
      $('.hard ').show();
    });

    $('.box2').click(function(){
      $('.ido ').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
        $(this).removeClass('animated fadeInUp');
      });
      $('.ido ').show();
      $('.ca ').hide();
      $('.cont ').hide();
      $('.hard ').hide();

    });
    $('.container').click(function(){
      $('.ido').hide();
      $('.hard ').show();
    });

    $('.box3').click(function(){
       $('.cont ').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
        $(this).removeClass('animated fadeInUp');
      });
      $('.cont ').show();
      $('.ca ').hide();
      $('.ido ').hide();
      $('.hard ').hide();

    });
    $('.container').click(function(){
      $('.cont').hide();
      $('.hard ').show();
    });

});


