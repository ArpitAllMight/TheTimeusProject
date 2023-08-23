$(document).ready(function () {
  $("main a").click(function (e) {
    e.preventDefault();
  });
  // HamBurger
  $("#hamBurger").click(function () {
    $(this).toggleClass("active");
    $("header nav").toggleClass("active");
  });
  // HamBurger Remove Event
  $("header a").click(function () {
    $("header nav").removeClass("active");
    $("#hamBurger").removeClass("active");
  });
  $("header ul li a").click(function () {
    $("header ul li a").removeClass("active");
    $(this).addClass("active");
  });
  // Slick Slider
  $("#slickSlider .slick-slider").slick({
    arrows: true,
    infinite: true,
    speed: 500,
  });
  // Scroll Down
  $("#scrollDown").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(this).offset().top,
      },
      900
    );
  });
  // Video Player One
  const video1 = $("#videoPlayer1")[0];
  const playIcon1 = $("#playIcon1");
  playIcon1.click(function () {
    video1.play();
  });
  video1.onplay = function () {
    playIcon1.hide();
  };
  video1.onpause = function () {
    playIcon1.show();
  };
  // Video Player Two
  const video2 = $("#videoPlayer2")[0];
  const playIcon2 = $("#playIcon2");
  playIcon2.click(function () {
    video2.play();
  });
  video2.onplay = function () {
    playIcon2.hide();
  };
  video2.onpause = function () {
    playIcon2.show();
  };
  // Video Player Three
  const video3 = $("#videoPlayer3")[0];
  const playIcon3 = $("#playIcon3");
  playIcon3.click(function () {
    video3.play();
  });
  video3.onplay = function () {
    playIcon3.hide();
  };
  video3.onpause = function () {
    playIcon3.show();
  };
  // Video Player Four
  const video4 = $("#videoPlayer4")[0];
  const playIcon4 = $("#playIcon4");
  playIcon4.click(function () {
    video4.play();
  });
  video4.onplay = function () {
    playIcon4.hide();
  };
  video4.onpause = function () {
    playIcon4.show();
  };
  // Video Player Five
  const video5 = $("#videoPlayer5")[0];
  const playIcon5 = $("#playIcon5");
  playIcon5.click(function () {
    video5.play();
  });
  video5.onplay = function () {
    playIcon5.hide();
  };
  video5.onpause = function () {
    playIcon5.show();
  };
  // Video Player Six
  const video6 = $("#videoPlayer6")[0];
  const playIcon6 = $("#playIcon6");
  playIcon6.click(function () {
    video6.play();
  });
  video6.onplay = function () {
    playIcon6.hide();
  };
  video6.onpause = function () {
    playIcon6.show();
  };
  // Tabs
  $("#tabs #tabBtn span").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#tabContent > div").hide();
    $($(this).data("id")).fadeIn(900);
  });
  // Product Slider
  $("#product .productSlider").slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 884,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // Scroll To Top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollToTop").fadeIn();
    } else {
      $("#scrollToTop").fadeOut();
    }
  });
  $("#scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});
