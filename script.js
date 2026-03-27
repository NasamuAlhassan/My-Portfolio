/* ============================================================
   PORTFOLIO SCRIPT — PRINCE ALHASSAN
   Clean, modular, performant
   ============================================================ */

"use strict";

// ============================================================
// MOBILE MENU
// ============================================================

const menuIcon = document.getElementById("menu-icon");
const navWrapper = document.getElementById("nav-wrapper");
const navLinks = document.querySelectorAll(".nav-link");

menuIcon.addEventListener("click", () => {
  const isOpen = navWrapper.classList.toggle("active");
  menuIcon.classList.toggle("bx-x", isOpen);
  menuIcon.classList.toggle("bx-menu", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navWrapper.classList.remove("active");
    menuIcon.classList.add("bx-menu");
    menuIcon.classList.remove("bx-x");
  });
});

// Close nav on outside click
document.addEventListener("click", (e) => {
  if (
    navWrapper.classList.contains("active") &&
    !navWrapper.contains(e.target) &&
    e.target !== menuIcon
  ) {
    navWrapper.classList.remove("active");
    menuIcon.classList.add("bx-menu");
    menuIcon.classList.remove("bx-x");
  }
});

// ============================================================
// HEADER — scroll style + active nav
// ============================================================

const header = document.getElementById("header");
const sections = document.querySelectorAll("section[id]");

const onScroll = () => {
  // Scrolled header
  header.classList.toggle("scrolled", window.scrollY > 60);

  // Active nav link
  const scrollMid = window.scrollY + 140;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!link) return;
    link.classList.toggle(
      "active",
      scrollMid >= top && scrollMid < top + height,
    );
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ============================================================
// TYPING ANIMATION
// ============================================================

const typed = new Typed(".multiple-text", {
  strings: [
    "Data Scientist",
    "Python Developer",
    "ML Enthusiast",
    "Web Developer",
  ],
  typeSpeed: 75,
  backSpeed: 55,
  backDelay: 1800,
  loop: true,
  showCursor: true,
  cursorChar: "_",
});

// ============================================================
// SCROLL REVEAL
// ============================================================

const sr = ScrollReveal({
  distance: "36px",
  duration: 850,
  delay: 80,
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  reset: false,
  viewFactor: 0.12,
});

sr.reveal(".section-header", { origin: "top", interval: 120 });
sr.reveal(".skills-box", { origin: "bottom", interval: 75 });
sr.reveal(".portfolio-box", { origin: "bottom", interval: 130 });
sr.reveal(".contact-card", { origin: "left", interval: 90 });
sr.reveal(".contact-form", { origin: "right", delay: 180 });
sr.reveal(".footer", { origin: "bottom", delay: 100 });

// ============================================================
// SKILL BARS — Intersection Observer
// ============================================================

const skillBars = document.querySelectorAll(".skill-bar");

const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const bar = entry.target;
      const box = bar.closest(".skills-box");
      const width = box ? box.dataset.width : "70";
      bar.style.width = width + "%";
      barObserver.unobserve(bar);
    });
  },
  { threshold: 0.4 },
);

skillBars.forEach((bar) => barObserver.observe(bar));

// ============================================================
// PARTICLES
// ============================================================

const particleConfig = (light) => ({
  particles: {
    number: { value: 45, density: { enable: true, area: 900 } },
    color: { value: light ? "#0099cc" : "#00d4ff" },
    opacity: {
      value: light ? 0.18 : 0.22,
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false },
    },
    size: { value: 1.4, random: true },
    move: {
      enable: true,
      speed: 0.45,
      direction: "none",
      random: true,
      straight: false,
      bounce: false,
    },
    links: {
      enable: true,
      color: light ? "#0099cc" : "#00d4ff",
      opacity: light ? 0.07 : 0.09,
      distance: 130,
      width: 0.8,
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: false },
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.22 } },
    },
  },
  retina_detect: true,
});

const loadParticles = (light) => {
  if (window.tsParticles) {
    tsParticles.load("particles-js", particleConfig(light));
  }
};
loadParticles(false);

// ============================================================
// VANILLA TILT — 3D cards
// ============================================================

if (window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll(".skills-box, .portfolio-box"), {
    max: 10,
    speed: 700,
    glare: true,
    "max-glare": 0.12,
    perspective: 1000,
    scale: 1.025,
    gyroscope: false,
  });
}

// ============================================================
// THEME TOGGLE
// ============================================================

const themeBtn = document.getElementById("theme-toggle");
const themeIcon = themeBtn.querySelector(".theme-icon");
const themeLabel = themeBtn.querySelector(".theme-label");
let lightMode = false;

themeBtn.addEventListener("click", () => {
  lightMode = !lightMode;
  document.body.classList.toggle("light-mode", lightMode);
  themeIcon.textContent = lightMode ? "☀️" : "🌙";
  themeLabel.textContent = lightMode ? "Dark" : "Light";
  loadParticles(lightMode);
});

// ============================================================
// AMBIENT MOUSE GLOW
// ============================================================

let glowRaf = null;

document.addEventListener(
  "mousemove",
  (e) => {
    cancelAnimationFrame(glowRaf);
    glowRaf = requestAnimationFrame(() => {
      const x = e.clientX,
        y = e.clientY;
      if (lightMode) {
        document.body.style.background = `radial-gradient(ellipse 650px 450px at ${x}px ${y}px, rgba(0,153,204,0.05), var(--bg) 70%)`;
      } else {
        document.body.style.background = `radial-gradient(ellipse 720px 520px at ${x}px ${y}px, rgba(0,212,255,0.065), var(--bg) 68%)`;
      }
    });
  },
  { passive: true },
);

// ============================================================
// HERO PARALLAX (subtle)
// ============================================================

const heroImg = document.querySelector(".home-img-container");
const heroContent = document.querySelector(".home-content");

window.addEventListener(
  "scroll",
  () => {
    const sy = window.scrollY;
    if (sy > window.innerHeight * 1.1) return;
    const t = sy * 0.3;
    if (heroImg) heroImg.style.transform = `translateY(${t * 0.12}px)`;
    if (heroContent) heroContent.style.transform = `translateY(${t * 0.06}px)`;
  },
  { passive: true },
);

// ============================================================
// SKILL MODAL
// ============================================================

const modal = document.getElementById("skill-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const modalIcon = document.getElementById("modal-icon");
const modalClose = document.getElementById("modal-close-btn");
const modalBdrop = document.querySelector(".modal-backdrop");
const allSkillBoxes = document.querySelectorAll(".skills-box");

const openModal = (box) => {
  modalTitle.textContent = box.dataset.title || "";
  modalDesc.textContent = box.dataset.description || "";
  modalLink.href = box.dataset.link || "#";

  // Sync icon from the box
  if (modalIcon && box.dataset.icon) {
    modalIcon.className = `bx bx-${box.dataset.icon}`;
  }
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
};

allSkillBoxes.forEach((box) =>
  box.addEventListener("click", () => openModal(box)),
);
modalClose?.addEventListener("click", closeModal);
modalBdrop?.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
});

// ============================================================
// CONTACT FORM
// ============================================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("#name").value.trim();
    const email = contactForm.querySelector("#email").value.trim();
    const message = contactForm.querySelector("#message").value.trim();

    const recipient = "pnalhassan@gmail.com";
    const subject = `New portfolio message from ${name || email || "visitor"}`;
    const body = `Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;

    const confirmSend = window.confirm("Send this message directly to pnalhassan@gmail.com? Click OK to proceed.");
    if (!confirmSend) {
      return;
    }

    window.location.href = mailtoLink;

    const btnText = contactForm.querySelector(".btn-text");
    const btnIcon = contactForm.querySelector(".btn-submit .bx");

    if (btnText) btnText.textContent = "Opening email client...";
    if (btnIcon) btnIcon.className = "bx bx-send";

    setTimeout(() => {
      if (btnText) btnText.textContent = "Send Message";
      if (btnIcon) {
        btnIcon.className = "bx bx-send";
      }
    }, 3500);

    contactForm.reset();
  });

  // Auto-grow textarea
  const textarea = contactForm.querySelector("textarea");
  textarea?.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = Math.min(this.scrollHeight, 320) + "px";
  });
}

// ============================================================
// SMOOTH SCROLL with offset for fixed header
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const headerH = header.offsetHeight + 20;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH;
    window.scrollTo({ top, behavior: "smooth" });
  });
});
