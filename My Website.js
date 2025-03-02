document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const options = { threshold: 0.1 };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Preloader Animation
    window.addEventListener("load", () => {
      document.getElementById("preloader").style.display = "none";
    });
  
    // Parallax Effect on Scroll for Hero Video
    window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;
      document.querySelector(".hero-video").style.transform = `translateY(${scrollPosition * 0.2}px)`;
    });
  });
  function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
  }
  
