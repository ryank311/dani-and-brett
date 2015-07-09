// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require masonry.pkgd.min
//= require imagesloaded.pkgd.min
//= require 60fps-scroll
//= require twitter/bootstrap
//= require turbolinks
//= require owl.carousel
//= require photoswipe.min
//= require photoswipe-ui-default.min
//= require_tree .


var initShowGallery = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array
    var items = [];
    $(".gallery a[href]").each(function(index, item) {
        var jqueryItem = $(item);
        size = jqueryItem.attr('data-size').split('x');
        items.push({
            src: jqueryItem.attr('href'),
            w: parseInt(size[0], 10),
						h: parseInt(size[1], 10)
        })
    });

    var openGallery = function(e) {
        e.preventDefault();
        var options = {
            index: $(this.parentNode.parentNode).index(), // start at first slide
            history: false
        };
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    $(".gallery a").click(openGallery);
};

// execute above function
$(function() {
  initShowGallery();
})
