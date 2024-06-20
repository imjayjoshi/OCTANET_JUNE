function initializeScripts() {
  $(document).ready(function () {
    $(".agent-slider-area").owlCarousel({
      autoplay: true,
      autoplayTimeout: 3000,
      slideSpeed: 3000,
      items: 2,
      nav: true,
      loop: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      margin: 30,
      dots: false,
      responsive: {
        320: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });

    $(".owl-carousel").owlCarousel({
      autoplay: true,
      autoplayTimeout: 3000,
      slideSpeed: 3000,
      items: 1,
      nav: true,
      loop: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      margin: 30,
      dots: true,
      responsive: {
        320: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });

    $(".testimonial").owlCarousel({
      loop: true,
      autoplay: true,
      slideSpeed: 3000,
      autoplayTimeout: 2000,
      margin: 10,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
      },
    });
  });

}

// Initialize all scripts
initializeScripts();
