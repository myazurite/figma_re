var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    draggable: true,
    imagesLoaded: true,
    adaptiveHeight: true,
    wrapAround: true,
    pageDots: true,
});
