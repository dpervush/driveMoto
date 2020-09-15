$(function () {
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--prev"><img src="images/svg/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--next"><img src="images/svg/arrow-right.svg" alt=""></button>'
  });

  $('.tabs__item').on('click', function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tabs__item--active')
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active')

    $(this).addClass('tabs__item--active')
    $($(this).attr('href')).addClass('tabs-content--active')
  });

  $('.product-item__like').on('click', function (e) {
    $(this).toggleClass('product-item__like--active')
  });

  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btn--prev"><img src="images/svg/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btn--next"><img src="images/svg/arrow-black-right.svg" alt=""></button>'
  })
}); 