$(document).ready(function() {
    $('.brand-slider').owlCarousel({
      nav: true,
      // autoplay: true,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
        },
        992:{
          items:3,
        },
        1200:{
          items:5,
        }
      }
    })
})