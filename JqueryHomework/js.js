$(document).ready(function(){

    $('ul li a, .main_btna, .main_btn').click(function() {
        $('.overlay').fadeIn('fast', function() {
            $('.modal').slideDown('slow');
        });
    });

    $('.close').click(function() {
        $('.modal').slideUp('slow', function() {
            $('.overlay').fadeOut('fast');
        });
    });
  
  });


//   $(document).ready(function(){

//     $('.main_btna, .main_btn, .main_mobmenu_field_list ul li').click(function() {
//         $('.modal').slideDown();
//     });
  
//   });