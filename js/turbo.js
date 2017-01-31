$(function() {

  var $scene1 = $('.scene-leaf path');
  var $scene1circle = $('.scene-leaf circle');
  var $scene2 = $('.scene-first circle');

  $scene1.css({opacity: 0});
  $scene1circle.css({opacity: 0});
  $scene2.css({opacity: 0});
  $('.sphere-2 path, .sphere-2 circle, .sphere-3 path, .sphere-3 circle, .sphere-4 path, .sphere-4 circle').css({opacity: 0});
  $('.scene-first .scene-text').css({'opacity': '0'});
  $('.sphere-2 .scene-text, .sphere-3 .scene-text, .sphere-4 .scene-text').css({'opacity': '0', 'stroke-opacity': '0', 'stroke': 'transparent'});
  setTimeout(function(){
    aniItemsRandom('.scene-leaf circle', function(){

    });
  } ,1000);

  aniItemsRandom('.scene-leaf path', function(){
  });


  setTimeout(function(){
    drawSVGPath('.scene-first path', function(){

    });
  },500);

  setTimeout(function(){
    aniItemsRandom('.scene-first circle', function(){
      drawSVGPath('.scene-first .circle', false, true);
      drawSVGPath('.scene-first path', function(){

      }, true);
      wierdMoves('.scene-first .circle', false);
      wierdMoves('.scene-first path', 'fill');

      aniItemsRandom('.sphere-2 path', function(){
        anime({
          targets: '.sphere-2 .scene-text',
          opacity: [0,1],
          translateX: [-200,0],
          duration: 500
        });
        aniItemsRandom('.sphere-3 path, .sphere-3 circle', function(){
          wierdMoves('.sphere-3 .circle', false);
          wierdMoves('.sphere-3 path', 'fill');
          aniItemsRandom('.sphere-4 path, .sphere-4 circle', function(){
            drawSVGPath('.sphere-4 .circle, .sphere-4 path', false, true);
            wierdMoves('.sphere-4 .circle', false);
            wierdMoves('.sphere-4 path');
            anime({
              targets: '.sphere-4 .scene-text',
              opacity: [0,1],
              translateX: [-200,0],
              duration: 500
            });
          })
          anime({
            targets: '.sphere-3 .scene-text',
            opacity: [0,1],
            translateX: [-200,0],
            duration: 500
          });
        })
      });
      aniItemsRandom('.sphere-2 circle', function(){
      });
      setTimeout(function(){
        drawSVGPath('.sphere-2 path, .sphere-2 circle', false, true);
          wierdMoves('.scene-first path', 'fill');
      },1500);
      anime({
        targets: '.scene-first .scene-text',
        opacity: [0,1],
        translateX: [-200,0],
        duration: 1500
      });
    });
  },2000);


function wierdMoves(selector, duration, mode){
  anime({
    targets: selector,
    loop:true,
    round:true,
    duration: duration || anime.random(4000, 15000),
    direction: 'alternate',
    scale: {
      value: (e,b,c) => {
        //console.log(e,b,c);
        const val = anime.random(75, 140) / 100;
        //console.log(val);
        return val;
      },
      delay: (e,index) => {
        return index*anime.random(150,750);
      },
      duration: anime.random(400,2100)
    },
    fillOpacity: {
      value: (wtf) => {
        if ( mode == 'fill' ) {
          return [0.1, 0.3];
        } else {
          return [1,1];
        }
      }
    },
    boxShadow: {
      value: (wtf) => {
        const shadow = '0px '+anime.random(7,3)+'px '+anime.random(2,10)+'px rgba(0,0,0,'+(anime.random(1,100) / 100)+')';
        return shadow;
      },
      delay: (e,index) => {
        return index*anime.random(650,1350);
      },
      duration: anime.random(400,2500),
    },
    translateY: {
      value: anime.random(15, -20)+'px',
      delay: (e,index) => {
        return index*anime.random(650,1350);
      },
      duration: anime.random(400,2600),
    },
    translateX: {
      value: anime.random(-15, 20)+'px',
      delay: (e,index) => {
        return index*anime.random(150,750);
      },
      duration: anime.random(650,2700)
    },
  })
}
function goneOut(selector){
  anime({
    targets: selector,
    duration:2500,
    scale: {
      value: (e) => {
        return [1, 3]
      },
      delay: (e,index) => {
        return index*anime.random(100,300);
      },
      duration: anime.random(450,1000)
    },
    opacity: [1,0],
    translateX: {
      value: () => {
        return [0, anime.random(300,0)]
      },
      delay: (e,index) => {
        return index*anime.random(100,300);
      },
      duration: anime.random(350,700)
    },
    translateY: {
      value: () => {
        return [0, anime.random(300,0)]
      },
      delay: (e,index) => {
        return index*anime.random(100,300);
      },
      duration: anime.random(350,700)
    },
  })
}
function drawSVGPath(selector, callback, infinite, direction){

    var el= document.querySelector(selector),
        rect = el.getBoundingClientRect(),
        fill = $(el).attr('fill');

    var totalLength = (2 * Math.PI * rect.width);
   // console.log('drawPath: totalLength', totalLength);

    $(selector).css({
      'stroke': '#222',
      'stroke-opacity': '1',
      'opacity': 1
    });

    anime({
      targets: selector,
      duration: 4500,
      loop: infinite || false,
      direction: direction || 'alternate',
      easing: 'linear',
      strokeDashoffset: {
        value: (e) => {
          var length = 1500;
      //    length = 2 * Math.PI * e.getTotalLength();
      //    console.log(e,length, e.tagName)
        //  if( e.tagName)
          return [ length,1000 ];
        },
        duration: 2500,
        delay: (e, index) => {
          return index * 500
        }
      },
      strokeDasharray: {
        value: (e) => {
          return [ 1500, 500 ];
        },
        duration:2500,
        delay: (e, index) => {
          return index * 400
        }
      },
      fillOpacity: {
        value: anime.random(90,100)/100,
        delay: (e, index) => {
          return index * 200
        },
        duration: 700
      },
      delay: function(el, index) {
        return index * 480
      },
      opacity: {
        value: [0.8, 1],
        duration: 600,
      },
      strokeOpacity: {
        value: anime.random(10,75)/100,
        duration: anime.random(700,1700),
        delay: (e, index) => {
          return index * anime.random(300,700)
        },
      },
      easing: 'easeInOutSine',
      complete: (e) => {

        if(callback) callback();
      }
    });
}
});


var aniEasings = [
  'easeInBack',
  'easeInBounce',
  'easeInCirc',
  'easeInCubic',
  'easeInElastic',
  'easeInExpo',
  'easeInOutBack',
  'easeInOutBounce',
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
  'linear'
];

function aniItemsRandom(selector, callback, maxDuration = 300, maxDelay = 120){

  var easing = aniEasings[anime.random(0,19)];

  $(selector).css({opacity:1});
  var params = {
      targets: selector,
      fillOpacity: {
        value: [0,1],
        duration: anime.random(250,maxDuration)
      },
      opacity: [0,1],
      translateY: {
        value: () => {
          return [anime.random(700,110), 0]
        },
        duration: anime.random(450,maxDuration)
      },
      translateX: {
        value: () => {
          return [anime.random(700,110), 0]
        },
        duration: anime.random(450,maxDuration)
      },
      rotate: {
        value: () => {
          return [anime.random(10,90), 0]
        },
        duration: anime.random(550,maxDuration)
      },
      rotateX: {
        value: () => {
          return [anime.random(170,40), 0]
        },
        duration: anime.random(450,maxDuration)
      },
      rotateY: {
        value: () => {
          return [anime.random(10,190), 0]
        },
        duration: anime.random(550,maxDuration)
      },
      loop: false,
      easing: easing,
      delay: function(el, index) {
        return index * anime.random(10,maxDelay)
      },
      complete: (a) => {
       // $(selector).addClass('animeted');
        if(callback) callback();
      }
    };

  //console.log('aniItemsRandom: '+selector, params);

  if( !$(selector).hasClass('animeted') ) {
    $(selector).addClass('animeted');
    anime(params);
  } else {
   // console.log('Already animeted. Skipping');
  }

}
