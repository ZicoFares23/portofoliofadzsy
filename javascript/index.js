document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll(".section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });


  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    section.classList.add("fade-in");
    observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  function revealSections() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();

  // Smooth scrolling untuk navigasi
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");

  for (let i = 0; i < 3; i++) {
    const bar = document.createElement("div");
    hamburger.appendChild(bar);
  }

  document.querySelector("nav").appendChild(hamburger);

  const menu = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("show");
    hamburger.classList.toggle("active");
  });
});
