gsap.from(".bar abbr", {
  scrollTrigger: ".bar",
  left: 0,
  duration: 3,
  stagger: 0.1,
  ease: Power2.easeInOut,
});
gsap.from(".bar span", {
  scrollTrigger: ".bar",
  width: 0,
  duration: 3,
  stagger: 0.1,
  ease: Power2.easeInOut,
});
