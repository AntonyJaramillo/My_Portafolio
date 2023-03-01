/*
===========================================================
TOGGLER ICON NAVBAR
===========================================================
 */
let menuIcon= document.querySelector('#menu-icon');
let navBar=document.querySelector('.navbar');
 
menuIcon.onclick= () =>{
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active');
}

/*
===========================================================
SCROLL SECTIONS ACTIVE LINKS 
===========================================================
 */

let sectiones= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');
window.onscroll = ()=>{
    sectiones.forEach(sec =>{
        let top= window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top> offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            })
        }

    });

    /*
    ===========================================================
    STICKY NAVBAR
    ===========================================================
    */
   let header=document.querySelector('header');
   header.classList.toggle('sticky',window.scrollY>100);
    /*
    ===========================================================
    REMOVE TOGGLER ICON AND NAVBAR WHEN CLICK NAV LINK (SCROLL)
    ===========================================================
    */
    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('active');
};

/*
===========================================================
SCROLL REVEAL
===========================================================
*/

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*
===========================================================
TYPED JS
===========================================================
*/

const typed= new  Typed('.multiple-text', {
    // strings:['Frontend Developer','Youtuber','Blogger'],
    strings:['Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*
===========================================================
MODES: dark and light
===========================================================
*/

const modeIcon= document.querySelector('.mode-icon');

modeIcon.addEventListener('click',()=>{
    // console.log(modeIcon.classList.contains('bx-sun'));
    if(modeIcon.classList.contains('bx-sun')){
        modeIcon.classList.replace('bx-sun','bx-moon');
    }else{
        modeIcon.classList.replace('bx-moon','bx-sun');
    }
    console.log(document.body.classList)
    document.body.classList.toggle('light-mode');
})
