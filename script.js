// script.js - small behaviors for Morya Food Point

document.addEventListener('DOMContentLoaded', function(){
  // Nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  function setAria(open){
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if(open){
      navList.classList.add('show');
      navToggle.setAttribute('aria-label','Close menu');
    } else {
      navList.classList.remove('show');
      navToggle.setAttribute('aria-label','Open menu');
    }
  }

  navToggle.addEventListener('click', function(){
    const isOpen = navList.classList.contains('show');
    setAria(!isOpen);
  });

  // Close mobile menu when link clicked
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => setAria(false));
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target){
          target.scrollIntoView({behavior:'smooth', block:'start'});
          // move focus for keyboard users
          target.setAttribute('tabindex','-1');
          target.focus({preventScroll:true});
        }
      }
    });
  });

  // Scroll to top button
  const scrollBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 400){
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({top:0,behavior:'smooth'});
  });

  // Close menu on escape
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') setAria(false);
  });

});
