/*--- aos initialization-----*/
var width1 = $(window).width();
if(width1 > 767){  
  AOS.init();
}
/*--- sticky header start-----*/ 
$(document).ready(function() { 
   $('header').addClass('fixed-top');
   $(window).scroll(function(){
        $('header').removeClass('fixed-top');       
        var top = $(document).scrollTop(); 

        if(top >= 10){
            $('header').removeClass('fixed-top');           
            $('header').addClass('sticky-top');
            $('header').addClass('header-shadow');
                         
        }else{           
            $('header').removeClass('sticky-top'); 
            $('header').addClass('fixed-top');
            $('header').removeClass('header-shadow');                      
        }       
    });  
}); 
/*--- go to top start-----*/

        $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
          $("#toTop").fadeIn();
        } else {
          $("#toTop").fadeOut();
        }
      });

      $(document).on("click", "#toTop", function () {
        $("html, body").animate({ scrollTop: 0 }, 100);
      });

      $(document).ready(function() {
          $("div#toTop").hide();
      });

/*---  go to top end-----*/

/*--- home page clients logo scroller start-----*/
$(function () {
    $('.marquee').marquee({
        duration: 70000,
        duplicated: true,
        gap: 0, 
        direction: 'left',         
        pauseOnHover: true,
        behavior: 'smooth'
    });
 });
/*--- clients logo scroller end-----*/