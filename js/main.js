(function ($) {
  "use strict";


  var window_width = jQuery(window).width(),
    window_height = window.innerHeight,
    header_height = jQuery(".default-header").height(),
    header_height_static = jQuery(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  jQuery(".fullscreen").css("height", window_height)
  jQuery(".fitscreen").css("height", fitscreen);


  jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > 600) {
      jQuery('.scroll-top').fadeIn(600);
    } else {
      jQuery('.scroll-top').fadeOut(600);
    }
  });
  jQuery('.scroll-top').on("click", function () {
    jQuery("html,body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  // ------------------------------------------------------------------------------ //
  // Preloader 
  // ------------------------------------------------------------------------------ //

  jQuery(document).ready(function () {
    setTimeout(function () {
      jQuery('body').addClass('loaded');
    }, 3000);

  });

  //Smooth Scrolling Using Navigation Menu
  jQuery('.scroll-top').on('click', function (e) {
    jQuery('html,body').animate({
      scrollTop: jQuery(jQuery(this).attr('href')).offset().top - 70
    }, 500);
    e.preventDefault();
  });

})(jQuery);