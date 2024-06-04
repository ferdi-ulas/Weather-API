// Load particles.js library after the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Create a script element to load particles.js library
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
  // Initialize particles.js when the script is loaded
  script.onload = function () {
    particlesJS("snow", {
      particles: {
        number: { value: 200, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        opacity: { value: 0.7, random: false, anim: { enable: false } },
        size: { value: 5, random: true, anim: { enable: false } },
        line_linked: { enable: false },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: true, rotateX: 300, rotateY: 1200 },
        },
      },
      interactivity: {
        events: {
          onhover: { enable: false },
          onclick: { enable: false },
          resize: false,
        },
      },
      retina_detect: true,
    });
  };
  // Append the script element to the head of the document
  document.head.append(script);
});
