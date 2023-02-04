$(document).ready(function() {

    $('.carousel').carousel({
      interval: 4200
    })

    $('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).fadeIn(300);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).fadeOut(300);
});


  $(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 25
     );
  });
});


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 0) {
    $('.top-banner').slideUp();
  } else {
    $('.top-banner').slideDown();
  }
});

/*Section C Toggles*/
    $("#show-three").hide();
    $("#col-three").on("mouseenter", function(){
        $("#show-three").toggle();
    });
    
    $("#show-three").hide();
    $("#col-three").on("mouseleave", function(){
        $("#show-three").toggle();
    });

        $("#show-one").hide();
    $("#col-one").on("mouseenter", function(){
        $("#show-one").toggle();
    });
    
    $("#show-one").hide();
    $("#col-one").on("mouseleave", function(){
        $("#show-one").toggle();
    });


        $("#show-two").hide();
    $("#col-two").on("mouseenter", function(){
        $("#show-two").toggle();
    });
    
    $("#show-two").hide();
    $("#col-two").on("mouseleave", function(){
        $("#show-two").toggle();
    });
/*Fade in for 3rd section code below taken from https://jsfiddle.net/tcloninger/e5qaD/*/
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('#col-one').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                    
            }
            
        }); 
        $('#col-two').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        });
        $('#col-three').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1200);
                    
            }
            
        });

        /*Start of jquery for Appointments page*/
        $('#appointment-one').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                    
            }
            
        }); 
        $('#appointment-two').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},600);
                    
            }
            
        });
        $('#appointment-three').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        });
                $('#appointment-four').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                    
            }
            
        });
                $('#appointment-five').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},600);
                    
            }
            
        });
                $('#appointment-six').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        });
                $('#appointment-seven').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                    
            }
            
        });
                        $('#appointment-eight').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},600);
                    
            }
            
        });
                                $('#appointment-nine').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},600);
                    
            }
            
        });       
        /*End of jquery for Appointments page*/
    
    });



   /*Associated friends and partners*/
   
    $(".grayscale").mouseenter(function(){
    $(this).removeClass("grayscale");
  })

  $(".grayscale").mouseout(function(){
    $(this).addClass("grayscale");
  })


var logo = document.querySelector('.container_menu');
var menu = document.querySelector('.menu');

logo.addEventListener('click', function(){
    menu.classList.toggle('showmenu');
});
 

});


