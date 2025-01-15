let initialPath = `M 10 100 Q 500 100 990 100`;
let finalPath = `M 10 100 Q 500 100 990 100`;
let string = document.querySelector("#string");

/* Animate the path based on mouse movement */
string.addEventListener("mousemove", (event) => {
  initialPath = `M 10 100 Q ${event.x} ${event.y} 990 100 `;
  gsap.to("svg path", {
    duration: 0.3,
    ease: "power3.out",
    attr: { d: initialPath },
  });
  console.log(initialPath);
});

/* Reset the path to the original shape when mouse leaves */
string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    duration: 1.5,
    ease: "elastic.out(1,0.2)", // Bouncy effect
    attr: { d: finalPath },
  });
});
