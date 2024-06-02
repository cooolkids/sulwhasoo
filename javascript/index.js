var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
  },
});

// $('.top').animate({ 'width': '100%' }, 1000, function () {
//   $('.right').animate({ 'height': '100%' }, 1000, function () {
//     $('.bottom').animate({ 'width': '100%' }, 1000, function () {
//       $('.left').animate({ 'height': '100%' }, 1000, function () {

//       })
//     })
//   })
// })

$('.inner-wrap').mouseenter(function () {
  $('.inner-wrap').stop().addClass('on')
  $('.inner-wrap li.main-menu').stop().slideDown()
})

$('li.main-menu').mouseenter(function () {
  $(this).find('ul.sub-menu').stop().slideDown()
})

$('.inner-wrap').mouseleave(function () {
  $('.inner-wrap').stop().removeClass('on')
  $('.inner-wrap li.main-menu').stop().slideUp()
})

$('li.main-menu').mouseleave(function () {
  $(this).find('ul.sub-menu').stop().slideUp()
})
