(function($) {
	$(document).on('ready', function() {
		var anchor = $('header').find('figure').find('a');
		var map = anchor.find('img');
		var $window = $(window);

		$window.on('resize', function() {
			var height = 300;
			var width = $window.width();
			width -= (width / 100) * 12;
			width = parseInt(width, 10);
			
			anchor.css({
				backgroundSize : '100%',
				opacity: .5
			});

			map.one('load', function() {
				anchor.css({
					backgroundSize: '200%',
					opacity: 1
				});
			});	

			var key = 'AIzaSyADpc4Hqul9KkwAhVtj8RbN-t14J6TOhp0';
			var url = 'http://maps.googleapis.com/maps/api/staticmap?center=Barneveld&zoom=10&size=' + width * 2 + 'x' + height * 2 + '&key=' + key + '&sensor=false&markers=Barneveld&scale=2';
			map.attr('src', url);
			anchor.css('background-image', 'url(' + url + ')');
		}).trigger('resize');
	});
}) (jQuery);
