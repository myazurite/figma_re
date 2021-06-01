
var booklet = document.querySelector('.bookletNav');
var flkty_4 = new Flickity( booklet, {
    // options
    cellAlign: 'center',
    contain: true,
    draggable: true,
    imagesLoaded: true,
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false,
});

$(window).resize(function(){
    if ($(window).width() <= 992) {
        $('.card-title').click(function(){
            $('.card-text').removeClass('hidden')
        })
    } else {
        $('.card-title').click(function(){
            $('.card-text').addClass('hidden')
        })
    }
});

