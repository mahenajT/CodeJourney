### 1. What is Animation?

- Adding animation to a website enhances movement within elements like text, images, and buttons, improving the site's interactivity and engagement.

### 2. GSAP Introduction

- GSAP (GreenSock Animation Platform) is a powerful JavaScript library that enables high-performance animations. It can animate HTML, CSS, SVG, Canvas, and JavaScript objects with precision and ease.

---

### 3. GSAP Animation Basics

- `gsap.to()`: Animation occurs from the initial to the final position.

```
gsap.to(".box", { x: 300, duration: 2 });
```

- `gsap.from()`: Animation occurs from the final to the initial position.

```
gsap.from(".box", { x: -300, duration: 2 });
```

- `gsap.fromTo()`: Defines both start and end properties.

```
gsap.fromTo(".box", { x: -300 }, { x: 300, duration: 2 });
```

---

## 4. Other Features

- `repeat`: Defines how many times an animation should repeat.
  `-1` makes it repeat infinitely.

```
gsap.to(".box", {
  x: 300,
  duration: 1,
  repeat: 2  // The animation will repeat 2 times (total 3 cycles)
});

```

- `yoyo`: Reverses the animation after it completes, creating a back-and-forth effect. Works with **repeat**.

```
gsap.to(".box", {
  x: 300,
  duration: 1,
  repeat: -1,  // The animation will repeat indefinitely
  yoyo: true   // The animation will reverse after completing each cycle
});

```

- `stagger`: If a tween has multiple targets, you can easily add some delay between the start of each animation

```
gsap.to('.box', {
  n y: 100,
  stagger: 0.1  // Delays the animation of each '.box' by 0.1 seconds, creating a staggered effect
});
```

- `delay`: Delays the start of the animation by a specified time before it begins.

```
gsap.to(".box", {
  x: 300,
  duration: 1,
  delay: 2  // The animation will start after 2 seconds
});

```

- `ease`: Customizes the timing function for smoother or more dynamic transitions.

```
gsap.to('target', {
  duration:2.5,
  ease: "power1.out", // Defines the easing function (smooth transition at the end)
  y: -500
});
```

- **TextAnimation**

```
gsap.from("h1", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 30,
  stagger: 0.3,
  // stagger: -1 // Reverse the stagger direction
});
```

---

## 5. timeline()

- Allows us to create sequenced or overlapping animations with fine-grained control.
- Simplifies the process of coordinating multiple animations, instead of managing **_delay_** manually.

```
const tl = gsap.timeline();
// Each animation starts after the previous one ends.
tl.to("element1", {x: 100, duration: 1})
tl.to("element2", {y: 100, duration: 1})
tl.to("element3", {rotate: 360, duration: 1})
```

## 6. scrollTrigger() plugin

- Creates scroll-based animations.
- CDN

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

**_Example_**

```
gsap.to("element", {
  x: 500,
  scrollTrigger: {
    trigger: "element", // Element that triggers the animation.
    scroller: "body",   // Start when element is in the viewport
    start: "top 80%",   // Ends when element reaches 30% of the viewport
    end: "top 30%,      // Makes animation smoother | scrub: 2 (value: 1 - 5)
    scrub: true
    markers: true       // Show start and end markers
    }
})
```

**_Pinning Element_**

- Pinning allows elements to stay fixed in place during scrolling.

```
gsap.to("parent-element element", {
  transform: "translateX(-150%),
  scrollTrigger: {
    trigger: "parent-element",
    pin: true,
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2, // For this element is depended on Scroll
  }
})
```

## 6. Advanced Features

### Callbacks

- Triggers custom functions at specific points

```
gsap.to("element", {
  scrollTrigger:{
    trigger: "element",
    start: "top,
    end: "top 100px",
    onEnter: () => console.log("Entered viewport!"),
    onLeave: () => console.log("Left viewport!"),
  }
})
```

### Animating Multiple Elements

```
gsap.utils.toArray(".item").forEach((item) => {
  gsap.from(item, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: item,
      start: "top 75%",
      end: "bottom 25%",
      scrub: true,
    },
  });
});
```

### Parallax Effect

```
gsap.to(".background", {
  y: -200,
  scrollTrigger: {
    trigger: ".content",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
```

## 7. SVG (Scalable Vector Graphics)

## SVG Path

- Quadratic and Cubic Bezier Curves
  - `M` : Move to starting point
  - `Q` : Define a quadratic Bezier curve with a control point and end point.
  - `C` : Define a cubic Bezier curve with two control points and an end point.

// The curve starts at (10, 100), bends toward (500, 100) as a control point, and ends at (990, 100)

```
<path d="M 10 100 Q 500 100 990 100" />
```

- Dynamic Path Manipulation

```
initialPath = `M 10 100 Q ${event.x} ${event.y} 990 100`;
```

- GSAP Integration

```
gsap.to("svg path", {
  duration: 0.3,
  ease: "power3.out",
  attr: { d: updatedPath },
});
```

## 8. Cursor Animation

### How it works

1. **Cursor Movement**: 
   - The custom cursor (`#cursor`) follows the mouse pointer using `mousemove` events and GSAP animations.
2. **Hover Effect**:
   - When the mouse enters the image container (`#image`), the cursor enlarges, changes color, and displays "View More."
   - When the mouse leaves the image container, the cursor reverts to its original size and style.

---

|  #  | Project                                                                                                | Live Demo                                                                                |
| :-: | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 01  | [GSAP](https://github.com/mahenajT/CodeJourney/tree/main/00_GSAP_Tutorial/02_gsap)                     | [Live Demo](https://mahenajt.github.io/CodeJourney/00_GSAP_Tutorial/02_gsap)             |
| 02  | [Timeline](https://github.com/mahenajT/CodeJourney/tree/main/00_GSAP_Tutorial/03_Timeline)             | [Live Demo](https://mahenajt.github.io/CodeJourney/00_GSAP_Tutorial/03_Timeline)         |
| 03  | [ScrollTrigger](https://github.com/mahenajT/CodeJourney/tree/main/00_GSAP_Tutorial/04_ScrollTrigger)   | [Live Demo](https://mahenajt.github.io/CodeJourney/00_GSAP_Tutorial/04_ScrollTrigger)    |
| 04  | [ScrollTrigger](https://github.com/mahenajT/CodeJourney/tree/main/00_GSAP_Tutorial/05_ScrollTrigger_2) | [Live Demo](https://mahenajt.github.io/CodeJourney/00_GSAP_Tutorial/05_ScrollTrigger_2)  |
| 05  | [SVG](https://github.com/mahenajT/CodeJourney/tree/main/00_GSAP_Tutorial/06_SVG)                       | [Live Demo](https://mahenajt.github.io/CodeJourney/00_GSAP_Tutorial/06_SVG)              |
| 07  | [Cursor Animation](https://github.com/mahenajT/CodeJourney/tree/main/00_GSAP_Tutorial/07_Cursor_Animation)           | [Live Demo](https://mahenajt.github.io/CodeJourney/00_GSAP_Tutorial/07_Cursor_Animation) |
