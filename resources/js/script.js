$(document).ready(function(){
//STICKY NAV

$('.js-section-about').waypoint(function(direction){
    if(direction =='down'){
        $('nav').addClass('sticky');
    }else{
        $('nav').removeClass('sticky');

    }
},{offset:'100px;'});

//SCROLL ON BUTTONS
$('.js-home').click(function(){
  $('html, body').animate({scrollTop: $('header').offset().top},1000);
});
$('.js-about').click(function(){
  $('html, body').animate({scrollTop: $('.about-section').offset().top},1000);
});

$('.js-benefits').click(function(){
  $('html, body').animate({scrollTop: $('.benefits-section').offset().top},1000);
});
$('.js-pricing').click(function(){
  $('html, body').animate({scrollTop: $('.pricing-section').offset().top},1000);
});

    
    
        /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
/* Animations on scroll */
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    }); 
    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    }); 
    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    $('.js-wp-5').waypoint(function(direction) {
        $('.js-wp-5').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
 
    
//NAVICON 
    

    $('.js-nav-icon').click(function(){
        
        var nav= $('.js-main-nav');
        var icon= $('.js-nav-icon i');
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    
    });

});

