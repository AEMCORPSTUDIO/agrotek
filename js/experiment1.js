const setDashoffset = function (el) {
  const l = el.getTotalLength();
  el.setAttribute('stroke-dasharray', l);
  return [l, 0];
};

const hAnimation = anime({
  targets: ['#h'],
  strokeDashoffset: {
    value: setDashoffset,
    duration: 1300,
    easing: 'easeOutQuad'
  },
});

const iAnimation = anime({
  targets: ['#i'],
  strokeDashoffset: {
    value: setDashoffset,
    duration: 1100,
    delay: 400,
    easing: 'easeOutQuad'
  },
});

const dotAnimation = anime({
  targets: ['#dot'],
  strokeDashoffset: {
    value: setDashoffset,
    duration: 800,
    delay: 1000,
    easing: 'easeOutQuad'
  },
});

const path1 = anime.path('.path1');
const path2 = anime.path('.path2');
const path3 = anime.path('.path3');
const path4 = anime.path('.path4');


anime({
  targets: '.line1',
  delay(el, index) {
    return index * 500;
  },
  translateX: path1,
  translateY: path1,
  rotate: path1,
  duration: 2500,
  loop: false,
  easing: 'linear'
});
anime({
  targets: '.line2',
  delay(el, index) {
    return index * 500;
  },
  translateX: path2,
  translateY: path2,
  rotate: path2,
  duration: 2500,
  loop: false,
  easing: 'linear'
});

anime({
  targets: '.line3',
  translateX: path3,
  delay(el, index) {
    return index * 500;
  },
  translateY: path3,
  rotate: path3,
  duration: 2500,
  loop: false,
  easing: 'linear'
});
anime({
  targets: '.line4',
  translateX: path4,
  delay(el, index) {
    return index * 500;
  },
  translateY: path4,
  rotate: path4,
  duration: 2500,
  loop: false,
  easing: 'linear',
});
anime({
  targets: 'path',
  opacity: 1,
  delay: 1500,
  duration: 6000,
  loop: false
});
anime({
  targets: '.line',
  opacity: 0,
  duration: 2500,
  loop: false,
  easing: 'linear'
});
