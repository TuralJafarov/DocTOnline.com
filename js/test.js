$('.owl-first').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["<img src='../image/next.png'>","<img src='../image/next.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});