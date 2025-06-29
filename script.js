document.addEventListener("DOMContentLoaded", () => {
  const animations = [
    {
      el: document.querySelector(".step-reveal"),
      name: "clipReveal", // updated from revealText
      duration: 6000,
    },
    {
      el: document.querySelector(".step-refine"),
      name: "sharpen",
      duration: 6000,
    },
    {
      el: document.querySelector(".step-realign"),
      name: "straightenText",
      duration: 6000,
    },
  ];

  animations.forEach(({ el, name, duration }) => {
    triggerAnimation(el, name, duration);

    el.addEventListener("mouseenter", () => {
      if (el.dataset.animating === "true") return;

      triggerAnimation(el, name, duration);
    });
  });

  function triggerAnimation(el, animationName, duration) {
    el.dataset.animating = "true";

    el.style.animation = "none"; // reset animation
    void el.offsetWidth; // force reflow
    el.style.animation = `${animationName} ${duration / 1000}s forwards`;

    setTimeout(() => {
      el.dataset.animating = "false";
    }, duration);
  }
});
