
const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const mobileNav = document.querySelector('.mobile-nav');
const container = document.querySelector('.container')

function shownav() {
   mobileNav.style.display = 'block';
   hamburger.style.display = 'none';
   close.style.display = 'block';

   if (mobileNav.style.display = 'block') {
      container.style.overflowY = 'hidden';
   } else {
      container.style.overflowY = 'scroll'
   }
   
}

function hidenav() {
   mobileNav.style.display = 'none';
   close.style.display = 'none';
   hamburger.style.display = 'block';

   if (mobileNav.style.display = 'none') {
      container.style.overflowY = 'scroll';
   } else {
       container.style.overflowY = 'hidden'
   }

   

}



