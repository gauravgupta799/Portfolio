// console.log("Javascript");

$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }

        // slide-up-script
        $('.scroll-up-btn').click(function() {
            // console.log("Slide Up");
            $('html').animate({scrollTop: 0});
        });
    });
    // toggle
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
        // console.log("Toggle active");
    });

    // owl carousel
    $('.carousel').owlCarousel({
      margin:20,
      loop:true,
      autoplay:true,
      autoplayTimeOut:2000,
      autoplayHoverPause:true,
      responsive: {
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
      }
    });
})