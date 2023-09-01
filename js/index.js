let nav = document.querySelector(".navbar");


window.onscroll = function(){
    if(document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}   


const currentPageUrl = window.location.href;

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  if (link.href === currentPageUrl) {
    link.classList.add('active');
  }
});