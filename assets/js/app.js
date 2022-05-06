$(document).ready(function(){
    $('.service-image').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        arrows: true,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="icon-left slick-icon"></i></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="icon-right-1 slick-icon"></i></button>`,        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
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
              arrows: false,
              autoplay: true,
              dots: true,
              autoplaySpeed: 1000,
            }
          }
        ]
      });
    });

  $(document).ready(function(){
    $('.service-customer').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        infinite: true,
        arrows: false,  
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
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
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: false,
  
            }
          }
        ]
      });
    });

  $(document).ready(function(){
    $('.customers-infomation').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
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
            arrows: false,

          }
        }
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


  // Price
  $('.progress-price').each(function(e) {

    var price = $(this),
        width = price.width(),
        handle,
        handleObj;

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 ' + width + ' 83');

    price.html(svg);
    price.append($('<div>').addClass('active').html(svg.cloneNode(true)));

    price.slider({
        range: true,
        values: [0, 0],
        min: 0,
        step: 5,
        minRange: 1000,
        max: 999999999,
        create(event, ui) {

          price.find('.ui-slider-handle').append($('<div />'));

            $(price.data('value-0')).html(price.slider('values', 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(price.data('value-1')).html(price.slider('values', 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(price.data('range')).html((price.slider('values', 1) - price.slider('values', 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));

            setCSSVars(price);

        },
        start(event, ui) {

            $('body').addClass('ui-slider-active');

            handle = $(ui.handle).data('index', ui.handleIndex);
            handleObj = price.find('.ui-slider-handle');

        },
        change(event, ui) {
            setCSSVars(price);
        },
        slide(event, ui) {

            let min = price.slider('option', 'min'),
                minRange = price.slider('option', 'minRange'),
                max = price.slider('option', 'max');

            if(ui.handleIndex == 0) {
                if((ui.values[0] + minRange) >= ui.values[1]) {
                  price.slider('values', 1, ui.values[0] + minRange);
                }
                if(ui.values[0] > max - minRange) {
                    return false;
                }
            } else if(ui.handleIndex == 1) {
                if((ui.values[1] - minRange) <= ui.values[0]) {
                  price.slider('values', 0, ui.values[1] - minRange);
                }
                if(ui.values[1] < min + minRange) {
                    return false;
                }
            }

            $(price.data('value-0')).html(ui.values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(price.data('value-1')).html(ui.values[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(price.data('range')).html((price.slider('values', 1) - price.slider('values', 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));

            setCSSVars(price);

        },
        stop(event, ui) {

            $('body').removeClass('ui-slider-active');

            let duration = .6,
                ease = Elastic.easeOut.config(1.08, .44);

            TweenMax.to(handle, duration, {
                '--y': 0,
                ease: ease
            });

            TweenMax.to(svgPath, duration, {
                y: 42,
                ease: ease
            });

            handle = null;

        }
    });

    var svgPath = new Proxy({
        x: null,
        y: null,
        b: null,
        a: null
    }, {
        set(target, key, value) {
            target[key] = value;
            if(target.x !== null && target.y !== null && target.b !== null && target.a !== null) {
              price.find('svg').html(getPath([target.x, target.y], target.b, target.a, width));
            }
            return true;
        },
        get(target, key) {
            return target[key];
        }
    });

    svgPath.x = width / 2;
    svgPath.y = 42;
    svgPath.b = 0;
    svgPath.a = width;

    $(document).on('mousemove touchmove', e => {
        if(handle) {

            let laziness = 4,
                max = 24,
                edge = 52,
                other = handleObj.eq(handle.data('index') == 0 ? 1 : 0),
                currentLeft = handle.position().left,
                otherLeft = other.position().left,
                handleWidth = handle.outerWidth(),
                handleHalf = handleWidth / 2,
                y = e.pageY - handle.offset().top - handle.outerHeight() / 2,
                moveY = (y - laziness >= 0) ? y - laziness : (y + laziness <= 0) ? y + laziness : 0,
                modify = 1;

            moveY = (moveY > max) ? max : (moveY < -max) ? -max : moveY;
            modify = handle.data('index') == 0 ? ((currentLeft + handleHalf <= edge ? (currentLeft + handleHalf) / edge : 1) * (otherLeft - currentLeft - handleWidth <= edge ? (otherLeft - currentLeft - handleWidth) / edge : 1)) : ((currentLeft - (otherLeft + handleHalf * 2) <= edge ? (currentLeft - (otherLeft + handleWidth)) / edge : 1) * (price.outerWidth() - (currentLeft + handleHalf) <= edge ? (price.outerWidth() - (currentLeft + handleHalf)) / edge : 1));
            modify = modify > 1 ? 1 : modify < 0 ? 0 : modify;

            if(handle.data('index') == 0) {
                svgPath.b = currentLeft / 2  * modify;
                svgPath.a = otherLeft;
            } else {
                svgPath.b = otherLeft + handleHalf;
                svgPath.a = (price.outerWidth() - currentLeft) / 2 + currentLeft + handleHalf + ((price.outerWidth() - currentLeft) / 2) * (1 - modify);
            }

            svgPath.x = currentLeft + handleHalf;
            svgPath.y = moveY * modify + 42;

            handle.css('--y', moveY * modify);

        }
    });

});

function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
            let p = previous || current,
                n = next || current,
                o = {
                    length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                    angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                },
                angle = o.angle + (reverse ? Math.PI : 0),
                length = o.length * smoothing;
            return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
        },
        cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, before, after, width) {
    let smoothing = .16,
        points = [
            [0, 42],
            [before <= 0 ? 0 : before, 42],
            update,
            [after >= width ? width : after, 42],
            [width, 42]
        ],
        d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
}

function setCSSVars(price) {
    let handle = price.find('.ui-slider-handle');
    price.css({
        '--l': handle.eq(0).position().left + handle.eq(0).outerWidth() / 2,
        '--r': price.outerWidth() - (handle.eq(1).position().left + handle.eq(1).outerWidth() / 2)
    });
}