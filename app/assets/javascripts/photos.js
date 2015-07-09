$(function() {

	var grid = $('.gallery').masonry({
			itemSelector: '.photo-thumbnail',
			columnWidth: '.photo-thumbnail',
			percentPosition: true,
			isInitLayout: false
		})
	grid.imagesLoaded().progress( function() {
	  grid.masonry('layout');
	});
});
