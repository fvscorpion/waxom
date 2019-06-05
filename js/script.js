$(function() {
	$(window).scrollTop(0);

	$('.toggles button').click(function() {
		var get_id = this.id;
		var get_current = $('.latest-projects .' + get_id);

		$('.project').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#all').click(function() {
		$('.project').show(500);
	});

	$('.toggleMenu').click(function() {
		$('.menu').toggleClass('on');
		$('header .hamburger').toggleClass('is-active');
	});

	$(".menu").on("click", "a", function (event) {
		event.preventDefault();

		$('.menu').removeClass('on');
		$('header .hamburger').removeClass('is-active');

		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".section-head h2, .section-head h3, .section-head p").animated("zoomIn");

	wow = new WOW(
	{
		mobile: false      
	})
	wow.init();

	
	$(".counters").waypoint(function() {
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".counter__number").each(function () {
			var tcount = $(this).data("count");
			$(this).animateNumber({
				number: tcount,
				easing: 'easeInQuad',
				numberStep: comma_separator_number_step
			},
			1200);
		});
	}, {
		offset : "80%"
	});
});
