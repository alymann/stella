
window.onclick = function myFunction(event) {
  var p = document.getElementById("p");
  var o = document.getElementById("o");
  var u = document.getElementById("u");
  var r = document.getElementById("r");


  if (event.target.matches('#pbutton')) {
    document.getElementById("pdrop").classList.toggle("show");
    document.getElementById("pbutton").classList.toggle("clear");
    if(p.classList.contains("fa-chevron-down")){
      p.classList.add("fa-chevron-up")
      p.classList.remove("fa-chevron-down");
    }
    else{
      p.classList.add("fa-chevron-down")
      p.classList.remove("fa-chevron-up");
    }
  }
  else if (event.target.matches('#obutton')) {
    document.getElementById("odrop").classList.toggle("show");
    document.getElementById("obutton").classList.toggle("clear");
    if(o.classList.contains("fa-chevron-down")){
      o.classList.add("fa-chevron-up")
      o.classList.remove("fa-chevron-down");
    }
    else{
      o.classList.add("fa-chevron-down")
      o.classList.remove("fa-chevron-up");
    }
  }
  else if (event.target.matches('#ubutton')) {
    document.getElementById("udrop").classList.toggle("show");
    document.getElementById("ubutton").classList.toggle("clear");
    if(u.classList.contains("fa-chevron-down")){
      u.classList.add("fa-chevron-up")
      u.classList.remove("fa-chevron-down");
    }
    else{
      u.classList.add("fa-chevron-down")
      u.classList.remove("fa-chevron-up");
    }
  }
  else if (event.target.matches('#rbutton')) {
    document.getElementById("rdrop").classList.toggle("show");
    document.getElementById("rbutton").classList.toggle("clear");
    if(r.classList.contains("fa-chevron-down")){
      r.classList.add("fa-chevron-up")
      r.classList.remove("fa-chevron-down");
    }
    else{
      r.classList.add("fa-chevron-down")
      r.classList.remove("fa-chevron-up");
    }
  }
}

window.onscroll = () => {

  // var introHeight = window.scrollY +document.querySelector('#intro').getBoundingClientRect().top -25;
  var wcagHeight = window.scrollY +document.querySelector('#wcag').getBoundingClientRect().top -25;
  var pourHeight = window.scrollY + document.querySelector('#pour').getBoundingClientRect().top -25;
  var toolsHeight = window.scrollY + document.querySelector('#tools').getBoundingClientRect().top -25;
  var aboutHeight = window.scrollY + document.querySelector('#about').getBoundingClientRect().top -25;
  var contactHeight = window.scrollY + document.querySelector('#contact').getBoundingClientRect().top;

  const nav = document.querySelector('nav');
  if(scrollY < 300){
    nav.className = '';
  }  
  else if(scrollY >= 300 && scrollY < wcagHeight){
    nav.className = 'scroll';
    nav.classList.add('introlink');
  }
  else if(scrollY >= wcagHeight && scrollY < pourHeight){
    nav.className = 'scroll';
    nav.classList.add('wcaglink');
  }
  else if(scrollY >= pourHeight && scrollY < toolsHeight){
    nav.className = 'scroll';
    nav.classList.add('pourlink');
  }
  else if(scrollY >=toolsHeight && scrollY < aboutHeight){
    nav.className = 'scroll';
    nav.classList.add('toolslink');
  }
  else if(scrollY >= aboutHeight && scrollY < contactHeight){
    nav.className = 'scroll';
    nav.classList.add('aboutlink');
  }
  else{
    nav.className = 'scroll';
    nav.classList.add('contactlink');
  }
};


