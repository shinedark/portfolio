$(document).ready(function() {
    $('.box1').click(function(){
      $('.ca ').show();
      $('.ido ').hide();
      $('.cont ').hide();

    });
    $('.container').click(function(){
      $('.ca').hide();
    });

    $('.box2').click(function(){
      $('.ido ').show();
      $('.ca ').hide();
      $('.cont ').hide();

    });
    $('.container').click(function(){
      $('.ido').hide();
    });

    $('.box3').click(function(){
      $('.cont ').show();
      $('.ca ').hide();
      $('.ido ').hide();

    });
    $('.container').click(function(){
      $('.cont').hide();
    });

});


