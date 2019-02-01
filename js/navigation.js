var tl = new TimelineMax({
    paused: true,
});

tl.set('.navigation-overlay', {
    zIndex: 3
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
    0.5,
    {
        y: 100,
        opacity: 0,
        ease: Expo.easeOut,
    },
    0.4
);

let button = document.querySelector('.menu-btn');

tl.reverse();

// if any of the links are clicked, close menu
let navLinks = document.getElementsByTagName('LI');
let length = navLinks.length;
for (let i = 0; i < length; i++) {
    navLinks[i].addEventListener('click', () => {
        tl.reversed(!tl.reversed()); // sets reversed state to inverse of current reversed state
    });
}

// if the menu button is clicked, close menu
button.addEventListener('click', () => {
    tl.reversed(!tl.reversed()); // sets reversed state to inverse of current reversed state
});