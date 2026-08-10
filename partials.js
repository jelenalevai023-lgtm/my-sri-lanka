(function(){
  var HEADER_HTML = '\
  <div class="wrap nav">\
    <a class="logo" href="index.html">\
      <span class="mark">MY&nbsp;<b>SRI&nbsp;LANKA</b>\
        <svg class="palm" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"><path d="M24 224s40-32 104-32 104 32 104 32"/><path d="M176 72c-80 40-48 120-48 120"/><path d="M176 72s-17.2-8.58-36-8c-17.46.57-36.3 9.19-44 40"/><path d="M176 72S160 9.5 104 40.75"/><path d="M232 136c0-64-56-64-56-64"/><path d="M176 72s16-52.9 56-22.67"/><path d="M184 136s22.61-32-7.95-64"/><circle cx="52" cy="140" r="20"/></svg>\
      </span>\
      <span class="sub">LAND OF UNTOUCHED NATURE</span>\
    </a>\
    <nav>\
      <ul>\
        <li><a href="index.html">Home</a></li>\
        <li><a href="destinations.html">Destinations</a></li>\
        <li><a href="explore.html">Explore</a></li>\
        <li><a href="travel-tips.html">Travel Tips</a></li>\
        <li><a href="about.html">About Me</a></li>\
        <li class="nav-item has-dropdown">\
          <a href="travel-tips.html#guide" class="nav-drop-toggle">Guides\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>\
          </a>\
          <ul class="nav-dropdown">\
            <li><a href="Free%20Travel%20Guide.pdf" target="_blank">Free Guide</a></li>\
            <li><a href="#">Premium Guide</a></li>\
          </ul>\
        </li>\
      </ul>\
    </nav>\
    <div class="nav-tools">\
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>\
      <span class="nav-burger nav-mobile-only">\
        <svg class="icon-burger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>\
        <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg>\
      </span>\
    </div>\
  </div>';

  var FOOTER_HTML = '\
  <div class="wrap foot">\
    <div class="foot-brand">\
      <a class="logo" href="index.html">\
        <span class="mark">MY&nbsp;<b>SRI&nbsp;LANKA</b>\
          <svg class="palm" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"><path d="M24 224s40-32 104-32 104 32 104 32"/><path d="M176 72c-80 40-48 120-48 120"/><path d="M176 72s-17.2-8.58-36-8c-17.46.57-36.3 9.19-44 40"/><path d="M176 72S160 9.5 104 40.75"/><path d="M232 136c0-64-56-64-56-64"/><path d="M176 72s16-52.9 56-22.67"/><path d="M184 136s22.61-32-7.95-64"/><circle cx="52" cy="140" r="20"/></svg>\
        </span>\
        <span class="sub">LAND OF UNTOUCHED NATURE</span>\
      </a>\
      <p>Created from a journey that changed my life, this space is where I share the experiences that made me fall in love with Sri Lanka.</p>\
    </div>\
    <div>\
      <h5>Quick Links</h5>\
      <ul><li><a href="destinations.html">Destinations</a></li><li><a href="explore.html">Explore</a></li><li><a href="travel-tips.html">Travel Tips</a></li><li><a href="about.html">About</a></li></ul>\
    </div>\
    <div>\
      <h5>Explore</h5>\
      <ul><li><a href="#">Temples</a></li><li><a href="#">Elephant Sanctuary</a></li><li><a href="#">Turtles</a></li><li><a href="#">Safari</a></li></ul>\
    </div>\
    <div>\
      <h5>About</h5>\
      <ul><li><a href="about.html">About Me</a></li><li><a href="#">Contact</a></li><li><a href="privacy-policy.html">Privacy Policy</a></li><li><a href="terms-of-use.html">Terms of Use</a></li></ul>\
    </div>\
  </div>\
  <div class="copy"><div class="wrap"><span>© 2026 My Sri Lanka. All rights reserved.</span><span>Created with ❤ by Monika Levai</span></div></div>';

  function setActiveNav(){
    var path = location.pathname.split('/').pop();
    if(!path) path = 'index.html';
    var target = window.ACTIVE_NAV || path;
    document.querySelectorAll('header nav > ul > li > a').forEach(function(a){
      if(a.classList.contains('nav-drop-toggle')) return;
      if(a.getAttribute('href') === target) a.classList.add('active');
    });
  }

  function initNav(){
    var items = document.querySelectorAll('.nav-item.has-dropdown');
    var header = document.querySelector('header');
    var burger = document.querySelector('.nav-burger');
    var navUl = document.querySelector('nav > ul');

    items.forEach(function(item){
      var toggle = item.querySelector('.nav-drop-toggle');
      toggle.addEventListener('click',function(e){
        e.preventDefault();
        var wasOpen = item.classList.contains('is-open') || item.matches(':hover, :focus-within');
        items.forEach(function(other){ other.classList.remove('is-open'); other.classList.remove('force-closed'); });
        if(!wasOpen){
          item.classList.add('is-open');
        }else{
          item.classList.add('force-closed');
        }
      });
      item.addEventListener('mouseleave',function(){
        item.classList.remove('force-closed');
      });
    });

    if(burger && header){
      burger.addEventListener('click',function(){
        header.classList.toggle('nav-open');
      });
    }

    if(navUl){
      navUl.querySelectorAll('a:not(.nav-drop-toggle)').forEach(function(a){
        a.addEventListener('click',function(){
          if(header) header.classList.remove('nav-open');
          items.forEach(function(item){ item.classList.remove('is-open'); });
        });
      });
    }

    document.addEventListener('click',function(e){
      items.forEach(function(item){
        if(item.classList.contains('is-open') && !item.contains(e.target)){
          item.classList.remove('is-open');
        }
      });
      if(header && header.classList.contains('nav-open') && !header.contains(e.target)){
        header.classList.remove('nav-open');
      }
    });
    document.addEventListener('keydown',function(e){
      if(e.key === 'Escape'){
        items.forEach(function(item){ item.classList.remove('is-open'); });
        if(header) header.classList.remove('nav-open');
      }
    });
  }

  function render(){
    var headerMount = document.getElementById('site-header');
    var footerMount = document.getElementById('site-footer');
    if(headerMount) headerMount.innerHTML = HEADER_HTML;
    if(footerMount) footerMount.innerHTML = FOOTER_HTML;
    setActiveNav();
    initNav();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', render);
  }else{
    render();
  }
})();
