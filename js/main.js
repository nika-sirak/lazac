$(function () {
  $(".hero-slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="/images/prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="/images/next.svg" alt=""></button>',
    vertical: true,
    responsive: [
      {
        breakpoint: 361,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".product-name").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    asNavFor: ".product-content",
    vertical: true,
    prevArrow:
      '<button type="button" class="product-prev"><img src="/images/product-prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="product-next"><img src="/images/product-next.svg" alt=""></button>',
    vertical: true,
    responsive: [
      {
        breakpoint: 891,
        settings: {
          vertical: false,
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          vertical: false,
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".product-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product-name",
    fade: true,
    arrows: false,
  });

  $(".menu-btn").on("click", function () {
    $(".menu-list").toggleClass("menu-active");
  });
});
