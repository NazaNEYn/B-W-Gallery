// *********************
// Hamburger Meu
// *********************


let icon = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');


let open = () => {
    one.style.transform = 'rotate(45deg)';
    two.style.transform = 'rotate(-45deg)';
    one.style.top = '8px';
    two.style.top = '8px';
    three.style.top = '16px';
    three.style.opacity = '0';
    menu.style.height = '100vh';
    menu.style.top = "38px";



    menu.style.transform = 'translateX(0)';

    icon.classList.remove('closed');
    icon.classList.add('open');

    icon.removeEventListener('click', open);
    icon.addEventListener('click', close);
};

let close = () => {

    one.style.transform = 'rotate(0)';
    two.style.transform = 'rotate(0)';

    three.style.opacity = '1';

    one.style.top = '0';
    two.style.top = '8px';
    three.style.top = '16px';


    menu.style.transform = 'translateX(-100%)';
    // menu.style.width = '0';



    icon.classList.remove('open');
    icon.classList.add('closed');

    icon.removeEventListener('click', close);
    icon.addEventListener('click', open);
};


if (icon.classList.contains('closed')) {
    icon.addEventListener('click', open);
} else {
    icon.addEventListener('click', close);
}

// *********************
// *********************
// *********************
// Back to top button
// *********************
// *********************
// *********************


const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 600) { // Show backToTopButton
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    } else { // Hide backToTopButton
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function() {
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};

/********************************* */

