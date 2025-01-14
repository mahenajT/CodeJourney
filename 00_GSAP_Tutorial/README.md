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

## 5. Other Features

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

- `scrollTrigger` : Triggers animations based on scroll position.

```
gsap.to(".box", {
  scrollTrigger: ".box", // The animation will start when '.box' enters the viewport (based on scroll position)
  x: 500,
  duration: 2
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
