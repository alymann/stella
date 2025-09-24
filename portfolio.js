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

  // navburger
  // ref: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp 
  function myFunction() {
    var x = document.getElementsByClassName("#nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  } 

  // countdown timer
var countDownDate = new Date("Oct 31, 2025 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


// Art Slideshow

