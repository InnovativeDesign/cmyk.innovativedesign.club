let heroTimeline = anime.timeline({
  easing: 'easeInOutCubic'
});

heroTimeline
.add({
  targets: '.bubbles',
  // opacity: [0, 1],
  scale: [0, 1],
  delay: function(el, index) {
    return index * 200
  },
  duration: 1000,
})
.add({
  targets: '.main__header h1',
  scale: [0, 1],
  opacity: [0, 1],
  delay: function(el, index) {
    return index * 250
  },
  duration: 1000,
}, "-=500")
.add({
  targets: '.bubble__intro h3',
  scale: [0, 1],
  opacity: [0, 1],
  duration: 700,
}, "-=300")
.add({
  targets: '.bubble__location h3',
  scale: [0, 1],
  opacity: [0, 1],
  duration: 700,
}, "-=300")
.add({
  targets: '.subhero__container',
  scale: [0, 1],
  opacity: [0, 1],
  duration: 1000,
}, "-=300")
.add({
  targets: '.btn',
  scale: [0, 1],
  opacity: [0, 1],
  duration: 500,
  easing: 'easeOutQuart',
}, "-=300")
.add({
  targets: '.hand__container img',
  scale: [0, 1],
  opacity: [0, 1],
  delay: function(el, index) {
    return index * 150
  },
  duration: 500,
})
