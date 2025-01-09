gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "2rem",
  scale: 2,
});
gsap.from("#box2", {
  x: 1000,
  duration: 2,
  delay: 1,
  borderRadius: "50%",
  scale: 0.5,
});
gsap.to("#box3", {
  x: 800,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: 1,
  // repeat:2,
  // repeat: -1, // Infinite
  yoyo: true,
});
gsap.from("h1", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 30,
  stagger: 0.3,
  // stagger: -1
});
