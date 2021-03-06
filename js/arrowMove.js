// hovering over any of the 'Learn more' links will run an animation where the arrow moves to the right
// when not hovering anymore, arrow moves back to original position.

let arrow = document.querySelectorAll('.arrow');
let cardLink = document.querySelectorAll('.card-link');

// setting up event listeners for all links
cardLink.forEach(x => {
    x.addEventListener('mouseover', arrowMoveIn);
    x.addEventListener('mouseleave', arrowMoveOut);
});

// event listeners for 'next project' links
nextProjectText.addEventListener('mouseover', arrowMoveIn);
nextProjectText.addEventListener('mouseleave', arrowMoveOut);


function arrowMoveIn() {
    TweenLite.to(arrow, 0.3, {
        left: "20px"
    });
}

function arrowMoveOut() {
    TweenLite.to(arrow, 0.3, {
        left: "0px"
    });
}
