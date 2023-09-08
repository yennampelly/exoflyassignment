
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });
  

  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from(".bottom-page1", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: "#page1",
      start: "top center"
    }
  });
  
  
  const menuButton = document.querySelector("#right-nav button");
  const navList = document.querySelector(".nav-list");
  
  menuButton.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  
  