(function ($) {
	"use strict";

    jQuery(document).ready(function($){


       
              
        $(".latest-slider").owlCarousel({
            items:1,
            nav:true,
            dot:false,
            navText: ['<i class="fal fa-arrow-circle-left"></i>','<i class="fal fa-arrow-circle-right"></i>'],
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                   
                },
                768:{
                    items:1,
                   
                },
                1000:{
                    items:1,
                   
                }
            }
            
          
        });      
              
        $(".tine-tab-slider").owlCarousel({
            items:1,
            nav:true,
            dot:false,
            navText: ['<i class="fal fa-arrow-circle-left"></i>','<i class="fal fa-arrow-circle-right"></i>'],
            loop:true,
            margin:0,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                   
                },
                768:{
                    items:1,
                   
                },
                1000:{
                    items:1,
                   
                }
            }
            
          
        });

$(document).ready(function() {
  $('select').niceSelect();
});


    });


    jQuery(window).load(function(){

        //  offcanvas-menu

        //    click-action
        $(".bar").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });

        $(".close-menu").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        });

        $(".off-canvas-overlay").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        });


    });


}(jQuery));	