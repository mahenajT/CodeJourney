// needs

import { gsap } from './node_modules/gsap/index.js';
import { ScrollTrigger } from "./node_modules/gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);
gsap.to(".box", {
  duration: 3,
  rotation: 360,
  scale: 2,
  scrollTrigger: {
    trigger: ".box",
    markers: true,
    scrub: true
  }  
});
