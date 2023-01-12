$(function() {
	initFixedHeader();
	initHeaderSearch();
	initMobileNav();
	initSlickSlider();
	initSlickSliderCenter();
	initSlickSliderProduct();
	initTabs();
	initAccordion();
	initOpenDropCategoryFilter();
});

function initFixedHeader() {
	window.onscroll = function() {myFunction()};
	var sticky = header.offsetTop;
	function myFunction() {
		if (window.pageYOffset > sticky) {
			$('#header').addClass("sticky");
		} else {
			$('#header').removeClass("sticky");
		}
	}
}
function initHeaderSearch() {
	$('.form-search-btn').on('click', function(){
	  $(this).closest('.form-search').toggleClass('open');
	  return false;
	});
	$(document).click(function(event) {
	  if ($(event.target).closest(".form-search .search").length) return;
	  $(".form-search").removeClass('open');
	  event.stopPropagation();
	});
}
function initMobileNav(){
	$('.mob-btn').on('click', function(){
		$(this).closest('#nav').toggleClass('active');
		$('body').toggleClass('open-nav');
		return false;
	});
	// $(document).click(function(event) {
	// 	if ($(event.target).closest("#nav .nav-menu").length) return;
	// 	$("#nav").removeClass('active');
	// 	$('body').removeClass('open-nav');
	// 	event.stopPropagation();
	// });
};
function initSlickSlider() {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		// fade: true,
		autoplay: true,
		autoplaySpeed: 4000
	});
}
function initSlickSliderCenter() {
	$('.about_section-slider-list').slick({
		centerMode: true,
		infinite: false,
		slidesToShow: 3,
		variableWidth: true,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					centerMode: true,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					infinite: true,
					centerPadding: '0px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
}
function initSlickSliderProduct() {
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		adaptiveHeight: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: true,
		dots: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
}
function initTabs(){
	$('.tabset .tab-control').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabset').find('.tab').removeClass('active').eq($(this).index()).addClass('active');
			return false;
	});
	$('.tabset-catalog .tab-control-catalog').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabset-catalog').find('.tab').removeClass('active').eq($(this).index()).addClass('active');
			return false;
	});
}
function initAccordion(){
  $('.accordion .opener').on('click', function() {
    if($(this).closest('li').hasClass('active')){
	    $(this).closest('li').removeClass('active');
	    $(this).closest('li').find('.accordion-slide').slideUp();
    } else {
	    $(this).closest('.accordion').find('.accordion-slide').slideUp();
	    $(this).closest('.accordion').find('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	    $(this).closest('li').find('.accordion-slide').slideDown();
    }
    return false;
  });
}
function initOpenDropCategoryFilter(){
  $(document).click(function(event) {
    if ($(event.target).closest(".categories-list-menu").length) return;
      $('.expanded-opener').removeClass('active');
      $(".categories-list-menu").removeClass('open');
      event.stopPropagation();
  });
  $('.expanded-opener').on('click', function() {
    $(this).toggleClass('active').siblings('.categories-list-menu').toggleClass('open');
    return false;
  });
};