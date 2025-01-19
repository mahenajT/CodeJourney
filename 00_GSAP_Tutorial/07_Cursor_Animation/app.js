let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image");
main.addEventListener("mousemove", (event) => {
  let x_axis = event.x;
  let y_axis = event.y;
  gsap.to(cursor, {
    x: x_axis,
    y: y_axis,
    duration: 1,
    ease: "power4.out",
  });
});

image.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 5,
    backgroundColor: "#111",
    color: "#fff",
  });
});
image.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
