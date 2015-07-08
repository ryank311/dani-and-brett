# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
	grid = $('.gallery').masonry({
		itemSelector: '.photo-thumbnail',
		columnWidth: '.photo-thumbnail',
		percentPosition: true,
		isInitLayout: false
		})
	setTimeout ( ->
		grid.masonry();
	), 500
