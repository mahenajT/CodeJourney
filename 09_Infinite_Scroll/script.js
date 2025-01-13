const projectData = [
  { title: "Euphoria", image: "images/image-1.jpeg", isAlternate: false },
  { title: "Scratcher", image: "images/image-2.jpg", isAlternate: true },
  { title: "Ember", image: "images/image-3.jpeg", isAlternate: false },
  { title: "Liquid Soleil", image: "images/image-4.jpeg", isAlternate: true },
  { title: "Vacuum", image: "images/image-5.jpg", isAlternate: false },
  { title: "Synthesis", image: "images/image-6.jpg", isAlternate: true },
  { title: "Infinite", image: "images/image-7.jpg", isAlternate: false },
  { title: "Aurora", image: "images/image-8.jpg", isAlternate: true },
  { title: "Prism", image: "images/image-9.jpg", isAlternate: false },
  { title: "Euphoria", image: "images/image-10.jpeg", isAlternate: true },
];

// Perform: Linear Interpolation, which smoothly transitions of value from a starting point to an ending point based on a given factor.
// We'll use it to achieve fluid animations for scrolling and parallax effects.
/**
 * start: The starting value of the range
 * end: The ending value of the range
 * factor: A number between 0 and 1 that represents the interpolation Factor
 * When
 * - factor = 0, the function returns the start value
 * - factor = 1, the function returns the end value
 * - factor is between 0 and 1, the function returns a value between the start and end values
 ** The function calculates a point that is a weighted average of start and end.
 */
const linearInterpolation = (start, end, factor) => {
  return start + (end - start) * factor;
};
// Contains all the adjustable settings that control how out scroll behaves
const config = {
  SCROLL_SPEED: 0.75, // Determines how responsive the scroll is to user input
  LERP_FACTOR: 0.05, // Factor to control the smoothness of the scroll transition
  BUFFER_SIZE: 15, // Scrolling without delays
  CLEANUP_THRESHOLD: 50, // Ensures that elements far from the viewport are removed to optimize performance and memory usage
  MAX_VELOCITY: 120, // Is capping how fast the user can scroll to maintain control and smoothness
  SNAP_DURATION: 500, // Specify how long the snapping animation takes when the user locks onto a project
};

// Tracks all the dynamic aspects of the scroll
const state = {
  currentY: 0, // current scroll position
  targetY: 0, // We are aiming to scroll to
  lastY: 0, // The previous scroll position and helps calculate velocity or detect directional changes
  scrollVelocity: 0, // The speed at which the user is scrolling
  isDragging: false,
  startY: 0,
  projects: new Map(),
  parallaxImages: new Map(),
  projectHeight: window.innerHeight,
  snapStartTime: 0,
  snapStartY: 0,
  snapTargetY: 0,
  lastScrollTime: Date.now(),
  isScroll: false,
  isSnapping: false,
};

const createParallaxImage = (imageElement) => {
  let bounds = null; // define the position of the image on the page
  let currentTranslateY = 0;
  let targetTranslateY = 0;
};
const updateBounds = () => {
  if (imageElement) {
    const react = imageElement.getBoundingClientRect();
    bounds = {
      top: react.top + window.scrollY,
      bottom: react.bottom + window.scrollY,
    };
  }

  const update = (scroll) => {
    if (!bounds) return;
    const relativeScroll = -scroll - bounds.top;
    targetTranslateY = relativeScroll * 0.2;
    currentTranslateY = linearInterpolation(
      currentTranslateY,
      targetTranslateY,
      0.1
    );
    if (Math.abs(currentTranslateY - targetTranslateY) > 0.1) {
      imageElement.style.transform = `translateY(${currentTranslateY}px) scale(1.5)`;
    }
  };
  updateBounds();
  return { update, updateBounds };
};
const getProjectData = (index) => {
  const dataIndex =
    ((Math.abs(index) % projectData.length) + projectData.length) %
    projectData.length;
  return projectData[dataIndex];
};

const createProjectElement = (index) => {
  if (state.projects.has(index)) return;
  const template = document.querySelector(".template");
  const project = template.cloneNode(true);
  project.style.display = "flex";
  project.classList.remove("template");

  const dataIndex =
    ((Math.abs(index) % projectData.length) + projectData.length) %
    projectData.length;
  const data = getProjectData(index);
  const projectNumber = (dataIndex + 1).toString().padStart(1, "0");
  project.innerHTML = data.isAlternate
    ? `
    <div class="side">
        <div class="img"><img src="${data.image}" alt="${data.title}"/></div>
    </div> 
    <div class="side">
       <div class="title">
        <h1>${data.title}</h1>
        <h1>${projectNumber}</h1>
       </div>
    </div>`
    : `
    <div class='side'>
        <div class='title'>
            <h1>${data.title}</h1>
            <h1>${projectNumber}</h1>
        </div>
    </div>
    <div class='side'>
        <div class='img'>
            <img src="${data.image}" alt="${data.title}"/>
        </div>
    `;
  project.style.transform = `translateY(${index * state.projectHeight}px)`;
  document.querySelector(".project-list").appendChild(project);
  state.projects.set(index, project);
  const img = project.querySelector("img");
  if (img) {
    state.parallaxImages.set(index, createParallaxImage(img));
  }
};

const createInitialProjects = () => {
  for (let i = -config.BUFFER_SIZE; i <= config.BUFFER_SIZE; i++) {
    createProjectElement(i);
  }
};
const getCurrentIndex = () => Math.round(-state.targetY / state.projectHeight);
const checkAndCreateProjects = () => {
  const currentIndex = getCurrentIndex();
  const minNeeded = currentIndex - config.BUFFER_SIZE;
  const maxNeeded = currentIndex + config.BUFFER_SIZE;
  for (let i = minNeeded; i <= maxNeeded; i++) {
    if (!state.projects.has(i)) {
      createProjectElement(i);
    }
  }
  state.projects.forEach((project, index) => {
    if (
      index < currentIndex - config.CLEANUP_THRESHOLD ||
      index > currentIndex + config.CLEANUP_THRESHOLD
    ) {
      project.remove();
      state.projects.delete(index);
      state.parallaxImages.delete(index);
    }
  });
};

const getClosestSnapPoint = () => {
  const currentIndex = Math.round(-state.targetY / state.projectHeight);
  return -currentIndex * state.projectHeight;
};
const initiateSnap = () => {
  state.isSnapping = true;
  state.snapStartTime = Date.now();
  state.snapStartY = state.targetY;
  state.snapTargetY = getClosestSnapPoint();
};
const updateSnap = () => {
  const elapsed = Date.now() - state.snapStartTime;
  const progress = Math.min(1, elapsed / config.SNAP_DURATION, 1);
  const t = 1 - Math.pow(1 - progress, 3);

  state.targetY = state.snapStartY + (state.snapTargetY - state.snapStartY) * t;

  if (progress >= 1) {
    state.isSnapping = false;
    state.targetY = state.snapTargetY;
  }
};
const animate = () => {
  const now = Date.now();
  const timeSinceLastScroll = now - state.lastScrollTime;
  if (!state.isSnapping && !state.isDragging && timeSinceLastScroll > 100) {
    const snapPoint = getClosestSnapPoint();
    if (Math.abs(state.targetY - snapPoint) > 1) {
      initiateSnap();
    }
  }
  if (state.isSnapping) {
    updateSnap();
  }
  if (!state.isDragging) {
    state.currentY += (state.targetY - state.currentY) * config.LERP_FACTOR;
  }
  checkAndCreateProjects();

  state.projects.forEach((project, index) => {
    const y = index * state.projectHeight + state.currentY;
    project.style.transform = `translateY(${y}px)`;

    const parallaxImage = state.parallaxImages.get(index);
    if (parallaxImage) {
      parallaxImage.update(state.currentY);
    }
  });
  requestAnimationFrame(animate);
};

const handleWheel = (e) => {
  e.preventDefault();
  state.isSnapping = false;
  state.lastScrollTime = Date.now();

  const scrollDelta = e.deltaY * config.SCROLL_SPEED;
  state.targetY -= Math.max(
    Math.min(scrollDelta, config.MAX_VELOCITY),
    -config.MAX_VELOCITY
  );
};
const handleTouchStart = (e) => {
  state.isDragging = true;
  state.isSnapping = false;
  state.startY = e.touches[0].clientY;
  state.lastY = state.targetY;
  state.lastScrollTime = Date.now();
};

const handleTouchMove = (e) => {
  if (!state.isDragging) return;
  const deltaY = (e.touches[0].clientY - state.startY) * 1.5;
  state.targetY = state.lastY + deltaY;
  state.lastScrollTime = Date.now();
};
const handleTouchEnd = () => {
  state.isDragging = false;
};

const handleTouchResize = () => {
  state.projectHeight = window.innerHeight;
  state.projects.forEach((project, index) => {
    project.style.transform = `translateY(${index * state.projectHeight}px)`;
    const parallaxImage = state.parallaxImages.get(index);
    if (parallaxImage) {
      parallaxImage.updateBounds();
    }
  });
};

const initializeScroll = () => {
  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchmove", handleTouchMove);
  window.addEventListener("touchend", handleTouchEnd);
  window.addEventListener("resize", handleTouchResize);

  createInitialProjects();
  animate();
};
document.addEventListener("DOMContentLoaded", initializeScroll);
