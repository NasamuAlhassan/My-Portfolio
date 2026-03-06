// MOBILE MENU
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => navbar.classList.toggle("active");

// TYPING ANIMATION
const typed = new Typed(".multiple-text", {
  strings: ["Data Scientist", "Python Developer", "ML Enthusiast"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// SCROLL REVEAL
ScrollReveal({ distance: "80px", duration: 2000, delay: 200 });
ScrollReveal().reveal(".home-content", { origin: "top" });
ScrollReveal().reveal(".skills-box", { interval: 200 });
ScrollReveal().reveal(".portfolio-box", { interval: 200 });

// PARTICLES
tsParticles.load("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00ffff" },
    size: { value: 3 },
    move: { enable: true, speed: 1 },
  },
  interactivity: { events: { onhover: { enable: true, mode: "repulse" } } },
});

// 3D TILT
VanillaTilt.init(document.querySelectorAll(".skills-box, .portfolio-box"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});

// LIGHT/DARK MODE BUTTONS
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "🌙 Night";
    tsParticles.load("particles-js", {
      particles: {
        number: { value: 60 },
        color: { value: "#222" },
        size: { value: 3 },
        move: { enable: true, speed: 1 },
      },
      interactivity: { events: { onhover: { enable: true, mode: "repulse" } } },
    });
  } else {
    themeBtn.textContent = "☀️ Day";
    tsParticles.load("particles-js", {
      particles: {
        number: { value: 80 },
        color: { value: "#00ffff" },
        size: { value: 3 },
        move: { enable: true, speed: 1 },
      },
      interactivity: { events: { onhover: { enable: true, mode: "repulse" } } },
    });
  }
});

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  if (document.body.classList.contains("light-mode")) {
    menuIcon.style.color = "#222";
  } else {
    menuIcon.style.color = "white";
  }
};

// AUTO GROW TEXTAREA
const textarea = document.querySelector("textarea");
textarea.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

// SOCIAL ICON MOUSE GLOW
document.addEventListener("mousemove", (e) => {
  const x = e.clientX,
    y = e.clientY;

  if (document.body.classList.contains("light-mode")) {
    // Lighter glow for Day mode
    document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,0,0,0.05), #f5f5f5 40%)`;
  } else {
    // Original glow for Night mode
    document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,255,0.15), #0f2027 40%)`;
  }
});

// SKILL MODAL
const skillBoxes = document.querySelectorAll(".skills-box");
const modal = document.getElementById("skill-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const modalClose = document.querySelector(".close");
skillBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    modal.style.display = "block";
    modalTitle.innerText = box.dataset.title;
    modalDescription.innerText = box.dataset.description;
    modalLink.href = box.dataset.link;
  });
});
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
