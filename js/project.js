let mainImg = document.querySelector('#project-main-img');
let projectHeader = document.querySelector('.projectHeader');
console.log(mainImg);


// function imageDown() {
//     let projectTl = new TimelineLite();

//     projectTl
//         .set(mainImg, {
//             scaleX: 0.4,
//             scaleY: 0.4
//         })
//         .from(mainImg, 1, {
//             top: -1000,
//             opacity: 0
//         })
//         .to(mainImg, 1, {
//             scaleX: 1.2,
//             scaleY: 1.2
//         })
//         .to(projectHeader, 2, {
//             opacity: 1,
//             top: -250
//         })

//     console.log('executed');
// }

// let mainImg = document.querySelector('.project-main-image');

// function imageDown() {
//     let projectTl = new TimelineLite();

//     projectTl
//         .to(mainImg, 2, {
//             scaleX: 0.9,
//             scaleY: 0.9
//         })
//         .from(`.card-header-project`, 1, {
//             autoAlpha: 0,
//             y: 50,
//         }, "-=1")
//         .from(`.card-theme-project`, 1, {
//             autoAlpha: 0,
//             y: 50,
//         }, "-=0.3");
// }

function arrowMoveOut() {
    TweenLite.to(arrow, 0.3, {
        left: "0px"
    });
}

let projectImage = document.querySelectorAll('.project-image');

// // project description animation
// let tlDescription = new TimelineMax();

// tlDescription.from(".image-cover", 1, {
//     scaleX: 0,
//     transformOrigin: "left",
// })
// .to(".image-cover", 1, {
//     scaleX: 0,
//     transformOrigin: "right"
// }, "reveal")
// .from(".project-image", 0.1, {
//     opacity: 0
// }, "reveal");




// image animation - don't play on load
let tlImage = new TimelineMax();

tlImage.from(".image-cover", 0.5, {
        scaleX: 0,
        transformOrigin: "left",
    })
    .to(".image-cover", 1, {
        scaleX: 0,
        transformOrigin: "right"
    }, "reveal")
    .from(".project-image", 0.1, {
        opacity: 0
    }, "reveal");


// scrolling carousel animation
let tlScrolling = new TimelineMax();

tlScrolling.from(".scroll-cover", 0.5, {
        scaleX: 0,
        transformOrigin: "left"
    })
    .to(".scroll-cover", 1, {
        scaleX: 0,
        transformOrigin: "right"
    }, "reveal")
    .from(".scrolling-card", 0.1, {
        opacity: 0
    }, "reveal");

// scrollmagic

let controller = new ScrollMagic.Controller();

// 1st scene : tlImage tween executed when scrolled to .project-img-container
let imageSM = new ScrollMagic.Scene({
        triggerElement: '.project-img-container',
        reverse: false,
    })
    .setTween(tlImage)
    .addTo(controller);

// 2nd scene : tlScrolling tween executed when scrolled to .scrolling-wrapper
let scrollingSM = new ScrollMagic.Scene({
        triggerElement: '.scrolling-wrapper',
        reverse: false,
    })
    .setTween(tlScrolling)
    .addTo(controller);


