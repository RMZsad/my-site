$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: false,
		slidesToShow: 1,
		speed: 600,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		centerMode: false,
		variableWidth: false,
		fade: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

