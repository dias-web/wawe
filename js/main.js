$(function () {

  $('.slider-blog__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.burger').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.burger').toggleClass('active');
    $('body').toggleClass('body--lock');
  });

  $(".menu a").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 40) {
      $('.header__inner').addClass('header__inner--bg');
    } else {
      $('.header__inner').removeClass('header__inner--bg');
    }
  });

  $(document).ready(function () {
    $(".header__icon").click(function () {
      topScroll = $('.about').offset().top;
      $('html, body').animate({
        scrollTop: topScroll
      }, 1000);
    });
  });

  var mixer = mixitup('.gallery__examples');
});