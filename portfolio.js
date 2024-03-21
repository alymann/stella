// ref: Itzel Maldonado

// adds shadow & underline to nav when scrolled
document.addEventListener("scroll", () => {
    const nav = document.querySelector("header");
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
    
  // underlines nav links when viewing that section
  // ref: https://codepen.io/Web_Cifar/pen/LYRBbVE
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navItem = document.querySelectorAll("#navlist a");
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
  
    navItem.forEach((a) => {
      a.classList.remove("viewing");
      if (a.classList.contains(current) && window.scrollY > 0) {
        a.classList.add("viewing");
      }
    });
  });