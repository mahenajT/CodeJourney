### 1. What is Animation?

- Adding animation to a website enhances movement within elements like text, images, and buttons, improving the site's interactivity and engagement.

### 2. GSAP Introduction

- GSAP (GreenSock Animation Platform) is a powerful JavaScript library that enables high-performance animations. It can animate HTML, CSS, SVG, Canvas, and JavaScript objects with precision and ease.

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

## 5. Other Features

- `ease`:  Customizes the timing function for smoother or more dynamic transitions.

```
gsap.to('target', {
  duration:2.5,
  ease: "power1.out",
  y: -500
});
```

- `stagger`: If a tween has multiple targets, you can easily add some delay between the start of each animation

```
gsap.to('.box', {
  n y: 100,
  stagger: 0.1
});
```

- `scrollTrigger` : Triggers animations based on scroll position.

```
gsap.to(".box", {
  scrollTrigger: ".box",
  x: 500,
  duration: 2
});
```
---