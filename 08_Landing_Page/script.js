const allContainer = gsap.utils.toArray(".container-item");
const flowerImageWrap = document.querySelector(".container-img-wrapper");
const flowerImage = document.querySelector(".container-img");
function initcontainer() {
  allContainer.forEach((link) => {
    link.addEventListener("mouseenter", flowerHover);
    link.addEventListener("mouseleave", flowerHover);
    link.addEventListener("mousemove", moveFlowerImage);
  });
}
function moveFlowerImage(e) {
  let xpos = e.clientX;
  let ypos = e.clientY;
  const timeLine = gsap.timeline();
  timeLine.to(flowerImageWrap, {
    x: xpos,
    y: ypos,
    duration: 0.5,
  });
}

function flowerHover(e) {
  if (e.type === "mouseenter") {
    const targetImage = e.target.dataset.img;

    const timeLine = gsap.timeline();
    timeLine
      .set(flowerImage, {
        backgroundImage: `url(${targetImage})`,
      })
      .to(flowerImageWrap, {
        duration: 0.5,
        autoAlpha: 1,
      });
  }else if(e.type === "mouseleave"){
    const timeLine = gsap.timeline()
    timeLine.to(flowerImageWrap, {
        duration: 0.5,
        autoAlpha: 0,
  
    })
  }
}
function init(){
    initcontainer()
}

window.addEventListener("load", function(){
    init()
})