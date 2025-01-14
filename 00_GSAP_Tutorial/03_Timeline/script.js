// We have to do calculation to work with animation delay for each element
gsap.to("#box1", {
  x: 700,
  duration: 1.5,
  delay: 1,
  rotate: 360,
});
gsap.to("#box2", {
  x: 700,
  backgroundColor: "yellow",
  duration: 1.5,
  delay: 2.5,
});
gsap.to("#box3", {
  x: 700,
  scale: 0.5,
  borderRadius: "20%",
  duration: 1.5,
  delay: 4,
});

// Usage of timeline() instead of "duration" & "delay"
let tl = gsap.timeline();
tl.to("#box4", {
  x: 700,
  duration: 1.5,
  delay: 1,
});
tl.to("#box5", {
  x: 700,
  duration: 1.5,
});
tl.to("#box6", {
  x: 700,
  duration: 1.5,
});

let tl2 = gsap.timeline();
tl2.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
tl2.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.8,
});
tl2.from("h1", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 0.2,
});
