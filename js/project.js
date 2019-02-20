// let mainImg = document.querySelector('#project-main-img');
// let projectHeader = document.querySelector('.projectHeader');
// console.log(mainImg);


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

let mainImg = document.querySelector('.project-main-image');

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

console.log(projectImage[0]);