// ! page up
const pageUpButton = document.querySelector('#pageUp')
window.onscroll = () => {
    scrollPageUp();
}
// show btn when scroll
function scrollPageUp() {
document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? pageUpButton.style.display = 'block' : pageUpButton.style.display = 'none';
}
// when clicked
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// event listener
pageUpButton.addEventListener('click', goToTop);


//! nav toggle

const burger = document.querySelector('.burger');

function navToggle(e) {
  if (!e.target.classList.contains('active')) {
    e.target.classList.add('active');
    gsap.to('.line1', .5, { rotate: '45', y: 7, background:'black' })
    gsap.to('.line2', .5, { rotate:'-45', y: -7, background:'black' })
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%" });
    document.body.classList.add('hide')
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%" });
    document.body.classList.remove('hide')


  }
}

burger.addEventListener('click', navToggle);
