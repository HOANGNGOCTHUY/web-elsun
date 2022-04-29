$(document).ready(function(){
    $('.service-image').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="icon-left slick-icon"></i></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="icon-right-1 slick-icon"></i></button>`
        
    });
  });

  $(document).ready(function(){
    $('.customers-infomation').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="icon-left slick-icon"></i></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="icon-right-1 slick-icon"></i></button>`,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              infinite: false,
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });


  // Video
  var myVideo = document.getElementById("video1");

  function playPause() {
    if(myVideo.paused)
      myVideo.play();
    else
      myVideo.pause();
  }

  // Toggle Menu
  const hambuger = document.querySelector(".header-hamburger");
  const navMenu = document.querySelector('.menu_list');
  const menuItem =document.querySelector(".item");
  const overlay =document.querySelector("#overlay");

  hambuger.addEventListener("click", function(){
      hambuger.classList.toggle("actived");
      navMenu.classList.toggle("actived");
      overlay.classList.toggle("actived");

  })

  overlay.addEventListener("click", function(){
    hambuger.classList.remove("actived");
    navMenu.classList.remove("actived");
    overlay.classList.remove("actived");

  })