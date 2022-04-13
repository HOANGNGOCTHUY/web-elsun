$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="icon-left slick-icon"></i></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="icon-right-1 slick-icon"></i></button>`
        
    });
  });

  $(document).ready(function(){
    $('.image-customers').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="icon-left slick-icon"></i></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="icon-right-1 slick-icon"></i></button>`
        
    });
  });