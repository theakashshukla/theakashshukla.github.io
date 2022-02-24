/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu')
navToggle = document.getElementById('nav-toggle')
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
      navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
      })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
      navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
      })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
      const navMenu = document.getElementById('nav-menu')

      navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content')
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
      let itemClass = this.parentNode.className

      for (i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills__content skills__close'
      }
      if (itemClass === 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open'
      }
}

skillsHeader.forEach((el) => {
      el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
      tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent => {
                  tabContent.classList.remove('qualification__active')
            })
            target.classList.add('qualification__active')

            tabs.forEach(tab => {
                  tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')

      })
})
/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {
      cssMode: true,
      loop: true,
      navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },
      pagination: {
            el: '.swiper-pagination',
            clickable: true,
      },
});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
      const scrollY = window.pageYOffset

      sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <=sectionTop + sectionHeight){
                  document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link')
            }
            else{
                  document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
            }
      })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
      const nav = document.getElementById('header')
      if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/

/*==================== change text ====================*/
var text = ["Ethical Hacker 🛡️", "App Developer 📲", "Software Engineer 🧑‍💻", ];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 70000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;

    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}