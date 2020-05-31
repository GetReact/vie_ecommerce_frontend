$(document).ready(function() {
    $('#new-releases').owlCarousel({
      nav: true,
      autoplay: true,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
        },
        767:{
          items:2,
        },
        1200:{
          items:3,
        }
      }
    })

    $('#our-partners').owlCarousel({
      nav: true,
      autoplay: true,
      responsiveClass:true,
      responsive:{
        0:{
          items:2,
        },
        992:{
          items:3,
        },
        1200:{
          items:4,
        }
      }
    })
})
