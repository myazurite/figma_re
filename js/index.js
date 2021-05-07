var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    draggable: true,
    imagesLoaded: true,
    adaptiveHeight: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
});

var elem_2 = document.querySelector('.bookletNav');
var flkty_2 = new Flickity( elem_2, {
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    wrapAround: true,

});

var elem_3 = document.querySelector('.banner2');
var flkty_3 = new Flickity( elem_3, {
    // options
    cellAlign: 'left',
    contain: true,
    draggable: true,
    imagesLoaded: true,
    adaptiveHeight: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
});
