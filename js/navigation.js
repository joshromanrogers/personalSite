var tl = new TimelineMax({
    paused: true,
});


tl.set('.navigation-overlay', {
    zIndex: 3,
    autoAlpha: 1,
});

// overlay moves down to 0px
tl.to('.navigation-overlay', 1.6, {
    top: 0,
    ease: Expo.easeInOut,
});

// staggers start time of array of targets by a specified amount of time (1s).
// list items appearing up from menu overlay with 0.4s gap.
tl.staggerFrom(
    '.menu ul li',
    1, {
        autoAlpha: 0,
        y: 50,
    },
    0.5
);

let button = document.querySelector('.menu-btn');
let barbaWrapper = document.getElementById('barba-wrapper');
let buttonSVG = document.querySelector('#svg');
let navLinks = document.querySelectorAll('.nav-links');
console.log(navLinks);
console.log(navLinks[0]);

tl.reverse();

// if any of the links are clicked, close menu
let length = navLinks.length;
for (let i = 0; i < length; i++) {
    navLinks[i].addEventListener('click', () => {
        tl.reversed(!tl.reversed()); // sets reversed state to inverse of current reversed state
        buttonSVG.classList.toggle('active'); // animates burger back if other links are clicked
    });
}

// if the menu button is clicked, close menu
button.addEventListener('click', () => {
    tl.reversed(!tl.reversed()); // sets reversed state to inverse of current reversed state
});