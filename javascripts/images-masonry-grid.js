
// initialize Masonry
var $container = $('#masonry-container').masonry();

// layout Masonry again after all images have loaded
// NB. Potential problem with infinite scroll?
  $container.imagesLoaded( function() {
      $container.masonry({
          itemSelector: '.masonry-item',
          "gutter": 15,
          cornerStampSelector: '.corner-stamp',
      });

});

//var msnry = $container.data('masonry');

//Hover shows opaque overlay on masonry item image with links:
$(function() {
  $('.text-content').hide();
  $('.masonry-item').hover(function() {
       var $image = $(this).find($(".masonry-image"));
       var $height = $image.height();
       var $overlay = $( this ).find( ".text-content" );
       $overlay.toggle();
       $overlay.css("height" , $height);
   });
});


//Vertical menu:
$('.images-sub-menu').hide(); //Hide sub menu by default

//On click show/hide sub items
$('.brands-categories-title').click(function(event){
    if ($(this).siblings().is(":visible")) {
        $(this).siblings().hide();
    } else {
        $('.images-sub-menu').hide(); //Hide sub menu 
        $(this).siblings().show();
    }
});  