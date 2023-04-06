$(function() {

    // animate-on-scroll
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    // typed.js
    const typed = new Typed('#typed', {
        strings: ["> Software Engineer", "> Game Developer", "> App Designer", "> Student of Programming"],
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 1500,
        loop: true,
        loopCount: Infinity,
        showCursor: false
    });

    // Smooth scroll
    const scroll = new SmoothScroll('a[href*="#"]');
});




// contact form stuff
const form = document.querySelector("form");
let captcha = document.getElementById("captcha");
const button = document.querySelector("button");

button.disabled = true;

form.addEventListener("keyup", () => {
  let validity = form.checkValidity();
  if (validity === true && captcha.value == 4) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

/*
form.addEventListener("submit", e => {
  e.preventDefault();
  form.innerHTML =
    "<div class='confirmation'>I appreciate the submission, but this form is currently not connected to any mailscript.</div>";
});
*/

function checkTab(e) {
  if (e.keyCode === 9) {
    button.classList.add("show-outline");
    window.removeEventListener("keydown", checkTab);
  }
}
window.addEventListener("keydown", checkTab);































