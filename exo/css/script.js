
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });
  
  // GSAP ScrollTrigger for animations
  gsap.registerPlugin(ScrollTrigger);
  
  // Animation for the bottom of page 1
  gsap.from(".bottom-page1", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: "#page1",
      start: "top center"
    }
  });
  
  // More animations can be added here using GSAP and ScrollTrigger
  
  // Mobile menu toggle
  const menuButton = document.querySelector("#right-nav button");
  const navList = document.querySelector(".nav-list");
  
  menuButton.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
  
  // Add more JavaScript functionality as needed
  
  