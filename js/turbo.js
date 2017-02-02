$(() => {
  const $scene1 = $('.scene-leaf path');
  const $scene1circle = $('.scene-leaf circle');
  const $scene2 = $('.scene-first circle');

  $scene1.css({ opacity: 0 });
  $scene1circle.css({ opacity: 0 });
  $scene2.css({ opacity: 0 });


  $('.sphere-2 path, .sphere-2 circle, .sphere-3 path, .sphere-3 circle, .sphere-4 path, .sphere-4 circle').css({ opacity: 0 });
  $('.scene-first .scene-text').css({ opacity: '0' });
  $('.sphere-2 .scene-text, .sphere-3 .scene-text, .sphere-4 .scene-text').css({ opacity: '0', 'stroke-opacity': '0', stroke: 'transparent' });
  $('.sphare-2 path').css({ opacity: 0 });
  $('.sphare-2 circle').css({ opacity: 0 });


  function showText(trg) {
    anime({
      targets: `${trg} .scene-text`,
      opacity: [0, 1],
      translateX: [-200, 0],
      duration: 500
    });
  }

//  setTimeout(() => aniItemsRandom('.scene-leaf circle'), 700);
  setTimeout(() => drawSVGPath('.scene-first path', false, true), 10);
  // setTimeout(() => drawSVGPath('.scene-leaf path'), 10);
  //
  setTimeout(() => {
    setTimeout(() => anime({
      targets: '.scene-leaf .bottle',
      opacity: [0, 0.7],
      scale: [0, 1],
      rotateX: [anime.random(70, 30), 0],
      translateX: [anime.random(120, 30), 0],
      fillOpacity: [0, 0.7],
      translateY: [anime.random(120, 30), 0],
      duration: 1100,
      easing: randEasing(true),
      delay: (e, i) => i * 130
    }), 200);
    setTimeout(() => {
      anime({
        targets: '.scene-leaf .liquids',
        scale: ['1', '1'],
        opacity: [0, 1],
        transformOrigin: 'bottom center',
        fillOpacity: [0, 1],
        duration: 2400,
        easing: randEasing(),
        delay: (e, i) => i * 130
      });
    }, 900);
    setTimeout(() => {
      anime({
        targets: '.scene-leaf .stick',
        scale: ['1,0', '1,1'],
        opacity: [0, 1],
        transformOrigin: 'bottom center',
        fillOpacity: [0, 1],
        translateY: [200, 0],
        duration: 2400,
        easing: randEasing(),
        delay: (e, i) => i * 130
      });
    }, 1200);
  }, 800);

  setTimeout(() => {
    aniItemsRandom('.scene-leaf .path-leaf');
  }, 2400);

  const sphere2Circle = $('.sphere-2 circle');
  const sphere2Path = $('.sphere-2 path');
//  easeInOutQuad;
  setTimeout(() => {
    setTimeout(() => anime({
      targets: '.sphere-2 .bottle',
      opacity: [0, 1],
      scale: [0, 1],
      rotateX: [50, 0],
      translateX: [-240, -240],
      fillOpacity: [0, 1],
      translateY: [-80, 0],
      easing: 'easeOutInCubic',
      duration: 500,
      delay: (e, i) => i * 70
    }), 1200);
    setTimeout(() => anime({
      targets: '.sphere-2 .dots',
      opacity: [0, 1],
      translateX: [-240, -240],
      fillOpacity: [0, 0.5],
      translateY: [-80, 0],
      easing: randEasing(true),
      duration: 1200,
      delay: (e, i) => i * 70,
      complete: () => {

      }
    }), 1500);

    setTimeout(() => {
      anime({
        targets: '.sphere-2 .flowers, .sphere-2 .bottle',
        translateX: [-240, 0],
        delay: (e, i) => i * 10,
        easing: randEasing(),
        duration: 100,
        complete: () => {
          anime({
            targets: '.scene-leaf-cap .cap',
            translateY: [-250, 0],
            fillOpacity: [0, 0.7],
            duration: 1000,
            asing: randEasing(),
          });
        }
      });
      setTimeout(() => {
        anime({
          targets: '.sphere-2 .dots',
          translateX: [-240, 0],
          fillOpacity: 0,
          delay: (e, i) => i * 10,
          easing: randEasing(),
        //  fillOpacity: [0.5, 1],
          duration: 500,
          complete: () => {
            anime({
              targets: '.sphere-2 .dots',
              fillOpacity: [0, 1],
              scale: [0, 1],
              duration: 800,
              delay: (e, i) => i * 110,
            });
          }
        });
      }, 50);
    }, 3000);
    setTimeout(() => aniItemsRandom('.sphere-2 .background'), 3500);
    setTimeout(() => {
      anime({
        targets: '.scene-leaf-cap .leafs',
        scale: [0.5, 1],
        duration: 1500,
        delay: (e, i) => i * 130,
        complete: () => {
        }
      });
      anime({
        targets: '.scene-leaf-cap .plate',
        translateY: [-50, 0]
      });
    }, 2900);

    setTimeout(() => anime({
      targets: '.sphere-2 .flowers',
      scale: [0, 1],
      translateX: [-240, -240],
      fillOpacity: [0, 1],
      opacity: [0, 1],
      duration: 1200,
      delay: (e, i) => i * 80
    }), 1200);
  //  setTimeout(() => aniItemsRandom('.sphere-2 circle'), 1400);
  //  setTimeout(() => showText('.sphere-2'), 2400);
  }, 2400);

  $('.scene-leaf-cap .leafs').css({ transform: 'scale(0.5)' });

  setTimeout(() => {
    anime({
      targets: '.scene-leaf-cap .leaf',
      opacity: [0, 1],
      skewY: [-100, 0],
      skewX: [-30, 0],
      rotateY: [-30, 0],
      fillOpacity: [0, 1],
      translateY: [80, 0],
      duration: 2900,
      delay: (e, i) => i * 130,
      complete: () => {

      }
    });
  }, 3200);
  setTimeout(() => {
    anime({
      targets: '.scene-leaf-cap .plate',
      opacity: [0, 1],
      rotateY: [-60, 0],
      fillOpacity: [0, 1],
      translateY: [180, -50],
      duration: 900,
      delay: (e, i) => i * 170,
      complete: () => {

      }
    });
  }, 3800);
  setTimeout(() => {
    anime({
      targets: '.scene-box path, .scene-box circle, .scene-box ellipse',
      opacity: [0, 1],
      fillOpacity: [0, 1],
      translateY: [-180, 0],
      duration: 600,
      delay: (e, i) => i * 30
    });
  }, 3400);

  setTimeout(() => {
    aniItemsRandom('.scene-first circle', () => {
    //  showText('.sphere-first');
    });
    anime({
      targets: '.scene-first svg',
      rotate: '+12260deg',
      duration: 2232600,
      loop: true,
      round: true
    });
    setTimeout(() => showText('.scene-first'), 1800);
  }, 2000);

  setTimeout(() => {
    aniItemsRandom('.sphere-3  circle', () => {
      drawSVGPath('.sphere-3 .circle', false, true);
      drawSVGPath('.sphere-3  path', () => {

      }, true);
    });
    setTimeout(() => showText('.sphere-3'), 1400);
  }, 4000);

  setTimeout(() => {
//    aniItemsRandom('.sphere-4 circle');
    setTimeout(() => showText('.sphere-4'), 100);
    anime({
      targets: '.sphere-4 path, .sphere-4 ellipse, .sphere-4 circle',
      opacity: [0, 1],
      fillOpacity: [0, 1],
      translateY: [-180, 0],
      duration: 600,
      delay: (e, i) => i * 30,
      complete: (e) => {
        anime({
          targets: '.windmill',
          rotate: {
            value: [35000],
          },
          loop: true,
          elasticity: 700,
          duration: 2113500,
          direction: 'alternate'
        });
        anime({
          targets: '.clouds',
          translateX: [0, 500],
          loop: true,
        //  rotate: true,
          autoplay: true,
          duration: 35000,
          direction: 'alternate'
        });
      }
    });
  }, 6000);


  function wierdMoves(selector, duration, mode) {
    anime({
      targets: selector,
      loop: true,
      round: true,
      duration: duration || anime.random(4000, 15000),
      direction: 'alternate',
      scale: {
        value: (e, b, c) => {
        // console.log(e,b,c);
          const val = anime.random(75, 140) / 100;
        // console.log(val);
          return val;
        },
        delay: (e, index) => index * anime.random(150, 750),
        duration: anime.random(400, 2100)
      },
      fillOpacity: {
        value: (wtf) => {
          if (mode == 'fill') {
            return [0.1, 0.3];
          }
          return [1, 1];
        }
      },
      boxShadow: {
        value: (wtf) => {
          const shadow = `0px ${anime.random(7, 3)}px ${anime.random(2, 10)}px rgba(0,0,0,${anime.random(1, 100) / 100})`;
          return shadow;
        },
        delay: (e, index) => index * anime.random(650, 1350),
        duration: anime.random(400, 2500),
      },
      translateY: {
        value: `${anime.random(15, -20)}px`,
        delay: (e, index) => index * anime.random(650, 1350),
        duration: anime.random(400, 2600),
      },
      translateX: {
        value: `${anime.random(-15, 20)}px`,
        delay: (e, index) => index * anime.random(150, 750),
        duration: anime.random(650, 2700)
      },
    });
  }

  function goneOut(selector) {
    anime({
      targets: selector,
      duration: 2500,
      scale: {
        value: (e) => [1, 3],
        delay: (e, index) => index * anime.random(100, 300),
        duration: anime.random(450, 1000)
      },
      opacity: [1, 0],
      translateX: {
        value: () => [0, anime.random(300, 0)],
        delay: (e, index) => index * anime.random(100, 300),
        duration: anime.random(350, 700)
      },
      translateY: {
        value: () => [0, anime.random(300, 0)],
        delay: (e, index) => index * anime.random(100, 300),
        duration: anime.random(350, 700)
      },
    });
  }

  function drawSVGPath(selector, callback, infinite, direction) {
    const el = document.querySelector(selector);
  //  const rect = el.getBoundingClientRect();
  //  const fill = $(el).attr('fill');

  //  const totalLength = (2 * Math.PI * rect.width);
   // console.log('drawPath: totalLength', totalLength);

    $(selector).css({
      stroke: '#222',
      'stroke-opacity': '1',
      opacity: 0
    });

    anime({
      targets: selector,
      loop: infinite || false,
      direction: direction || 'alternate',
      strokeDashoffset: {
        value: (e) => {
          const length = 2500;
        //  length = 2 * Math.PI * e.getTotalLength();
      //    console.log(e,length, e.tagName)
        //  if( e.tagName)
          return [length, 30];
        },
        duration: 2000,
        delay: (e, index) => index * 300
      },
      strokeDasharray: {
        value: (e) => [2500, 0],
        duration: 3500,
        delay: (e, index) => index * 200
      },
      fillOpacity: {
        value: anime.random(90, 100) / 100,
        delay: (e, index) => index * 200,
        duration: 7100
      },
      opacity: {
        value: (e) => {
          if (infinite) {
            return [1, 1];
          }
          return [0.8, 1];
        },
        duration: 2600,
        delay: (e, index) => index * 200,
      },
      strokeOpacity: {
        value: anime.random(30, 75) / 100,
        duration: anime.random(700, 1700),
        delay: (e, index) => index * anime.random(300, 700),
      },
      easing: 'easeInOutSine',
      complete: (e) => {
        if (callback) callback();
      }
    });
  }
});


const aniEasings = [
  'easeInOutCirc',
  'easeInOutCubic',
  'easeInOutElastic',
  'easeInOutExpo',
  'easeInOutQuad',
  'easeInOutQuart',
  'easeInOutQuint',
  'easeInOutSine',
  'easeInQuad',
  'easeInQuart',
  'easeInQuint',
  'easeInSine',
  'easeInBack',
  'easeInBounce',
  'linear',
  'easeInQuad',
  'easeInQuart',
  'easeInQuint',
  'easeInSine',
  'easeInBack',
  'easeInBounce',
  'easeInCirc',
  'easeInCubic',
  'easeInElastic',
  'easeInExpo',
  'easeInOutBack',
  'easeInOutBounce',
  'easeOutBack',
  'easeOutBounce',
  'easeOutCirc',
  'easeOutCubic',
  'easeOutElastic',
  'easeOutExpo',
  'easeOutInBack',
  'easeOutInBounce',
  'easeOutInCirc',
  'easeOutInCubic',
  'easeOutInElastic',
  'easeOutInExpo',
  'easeOutInQuad',
  'easeOutInQuart',
  'easeOutInQuint',
  'easeOutInSine',
  'easeOutQuad',
  'easeOutQuart',
  'easeOutQuint',
  'easeOutSine',
];
/*

 */
function randEasing(log) {
  const easing = aniEasings[anime.random(0, aniEasings.length)];
  if (log) console.log(easing);
  return easing;
}
function aniItemsRandom(selector, callback, maxDuration = 700, maxDelay = 220, minDuration = 250) {
  $(selector).css({ opacity: 1 });
  const params = {
    targets: selector,
    opacity: {
      value: [0, 1],
      duration: anime.random(minDuration, maxDuration),
      easing: randEasing(),
      delay: (el, index) => index * anime.random(40, maxDelay)
    },
    fillOpacity: {
      value: [0, 1],
      duration: anime.random(minDuration + 200, maxDuration + 300),
      easing: randEasing(),
      delay: (el, index) => index * anime.random(50, maxDelay)
    },
    translateY: {
      value: () => [anime.random(400, 50), 0],
      duration: anime.random(minDuration, maxDuration),
      easing: randEasing(),
      delay: (el, index) => index * anime.random(10, maxDelay)
    },
    translateX: {
      value: () => [anime.random(400, 50), 0],
      duration: anime.random(minDuration, maxDuration),
      easing: randEasing(),
      delay: (el, index) => index * anime.random(10, maxDelay)
    },
    translateZ: {
      value: () => [anime.random(400, 50), 0],
      duration: anime.random(minDuration, maxDuration),
      easing: randEasing(),
      delay: (el, index) => index * anime.random(10, maxDelay)
    },
    rotatZe: {
      value: () => [anime.random(10, 170), 0],
      duration: anime.random(minDuration, maxDuration),
      easing: randEasing(),
      delay: (el, index) => index * anime.random(10, maxDelay)
    },
    rotateX: {
      value: () => [anime.random(170, 30), 0],
      duration: anime.random(minDuration, maxDuration),
      easing: randEasing(),
      delay: (el, index) => index * anime.random(10, maxDelay)
    },
    rotateY: {
      value: () => [anime.random(10, 170), 0],
      duration: anime.random(minDuration, maxDuration),
      easing: randEasing(),
      delay: (el, index) => index * anime.random(10, maxDelay)
    },
    loop: false,
    complete: (a) => {
       // $(selector).addClass('animeted');
      if (callback) callback();
    }
  };

  // console.log('aniItemsRandom: '+selector, params);

  if (!$(selector).hasClass('animeted')) {
    $(selector).addClass('animeted');
    anime(params);
  } else {
   // console.log('Already animeted. Skipping');
  }
}
