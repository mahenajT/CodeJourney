gsap.registerPlugin(ScrollTrigger);
let timeLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "0% 95%",
    end: "70%, 50%",
    scrub: true,
  },
});
timeLine.to(
  "#can",
  {
    top: "88%",
    left: "12%",
    rotate: "30deg",
    width: "35%",
  },
  "chocolate"
);
timeLine.to(
  "#chocolate",
  {
    top: "160%",
    left: "25%",
    width: "20%",
  },
  "chocolate"
);
timeLine.to(
  "#chocolate2",
  {
    top: "170%",
    width: "10%",
    rotate: "-15deg",
    left: "90%",
  },
  "chocolate"
);
timeLine.to(
  "#almond",
  {
    top: "110%",
    left: "70%",
    rotate: "130deg",
  },
  "chocolate"
);
timeLine.to(
  "#almond2",
  {
    top: "110%",
    left: "0%",
    rotate: "30deg",
  },
  "chocolate"
);
let timeLine2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".product",
    start: "10% 95%",
    end: "40% 50%",
    scrub: true,
  },
});
timeLine2.to(
  "#chocolate",
  {
    width: "28%",
    left: "45%",
    top: "214%",
  },
  "can"
);
timeLine2.to(
  "#can",
  {
    width: "30%",
    left: "35%",
    top: "186%",
    rotate: "0deg",
  },
  "can"
);

timeLine2.to(
  "#chocolate2",
  {
    top: "260%",
    left: "35%",
    width: "10%",
  },
  "can"
);
