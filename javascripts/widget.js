// initialize Masonry
var $container = $('#masonry-container').masonry();

// layout Masonry again after all images have loaded
// NB. Potential problem when introducing infinite scroll?
$container.imagesLoaded(function () {
    $container.masonry({
        itemSelector: '.masonry-item',
        "gutter": 15,
    });

});

//var msnry = $container.data('masonry');

//Hover shows opaque overlay on masonry item image with links:
$(function () {
    $('.text-content').hide();

    //Whenever the masonry product item is hovered:
    $('.masonry-image').hover(function () {

        //        if ($(".blue-overlay").is(":visible")) {
        //            //$(".text-content").hide();
        //
        //        } else 
        if ($(".blue-overlay").is(":hidden")) {
            //console.log('blue overlay hidden');
            if ($(this).parent().find(".text-content").is(":hidden")) {
                var $image = $(this);
                var $height = $image.height();
                var $overlay = $(this).parent().find(".text-content");
                $('.text-content').hide();
                $overlay.show();
                $overlay.css("height", $height);
                //console.log('text content hidden');
            } else {
                //console.log('text content visible');

            }
        } else {
            //console.log('blue overlay visible');
        }
    });
});

//$('.masonry-item').mouseleave(function() {
//    $(this).find(".text-content").hide();
//    console.log( $(this).find(".text-content").hide());
//});