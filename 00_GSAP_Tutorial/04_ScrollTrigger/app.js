gsap.from("#page1 #box", {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
});

gsap.from("#page2 #box", {
  scale: 0,
  duration: 1,
  rotate: 360,
  // scrollTrigger: "#page2 #box"
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
gsap.from("#page3 h1", {
  opacity: 0,
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
gsap.from("#page3 h2", {
  opacity: 0,
  x: -500,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 h2",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
gsap.from("#page3 #box", {
  scale: 0,
  opacity: 0,
  duration: 3,
  rotate: 720,
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    // scrub: true, // Scrub keeps box's journey start to end point
    scrub: 2, // (1- 5 [smoothness])
    pin: true,
  },
});
