// iPhone scaling
(function(doc) {

	var addEvent = 'addEventListener',
		type = 'gesturestart',
		qsa = 'querySelectorAll',
		scales = [1, 1],
		meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];
		
	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}
	
	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

}(document));

function superHero() {
	$('.super-hero').css('min-height', $(window).height() + 'px');
	$('.super-hero .wrapper').css('min-height', $(window).height() + 'px');
}
superHero();

$(window).on('resize', function() {
	superHero();
});

$(document).ready(function() {
	
	$('a.email-addy').each(function(i) {
		var text = $(this).text();
		var address = text.replace(' at ', '@');
		$(this).attr('href', 'mailto:' + address);
		$(this).text(address);
	});

});
