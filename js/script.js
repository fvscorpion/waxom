$(function() {
	$('.toggles button').click(function() {
		var get_id = this.id;
		var get_current = $('.latest-projects .' + get_id);

		$('.project').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#all').click(function() {
		$('.project').show(500);
	});
});