const timeLine_img = gsap
  .timeline({
    ease: "Power1.easeInfoOut",
  })
  .to(".men .img-overlay", {
    duration: 1,
    y: "100%",
  })
  .to(
    ".women .img-overlay",
    {
      duration: 1,
      y: "100%",
    },
    "-=.7"
  )
  .from(".img img", {
    opacify: 0,
    duration: 1,
    scale: 1.2,
    stagger: 0.2,
  })
  .from(".text h1", {
    opacity: 0,
    duration: 1,
    y: 50,
  })
  .from(
    ".text h5",
    {
      opacity: 0,
      duration: 1,
      y: 50,
    },
    "-=.5"
  )
  .to(".content", {
    y: "80px",
  });
const timeLine_header = gsap
  .timeline({
    ease: "Power1.easeInfoOut",
  })
  .from("header", {
    delay: 4.5,
    duration: 1,
    y: -80,
  })
  .from("header .logo", {
    duration: 1,
    y: -80,
  })
  .from(
    "header .menu li",
    {
      duration: 1,
      y: -80,
      stagger: 0.1,
    },
    "-=.4"
  );
