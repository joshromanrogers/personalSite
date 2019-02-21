// hovering over any of the 'Learn more' links will run an animation where the arrow moves to the right
// when not hovering anymore, arrow moves back to original position.

let nextProject = document.querySelectorAll('.next-project');

// setting up event listeners for all links
nextProject.forEach(x => {
    x.addEventListener('mouseover', wordMoveIn);
    x.addEventListener('mouseleave', wordMoveOut);
});

// event listeners for 'next project' links
nextProjectText.addEventListener('mouseover', wordMoveIn);
nextProjectText.addEventListener('mouseleave', wordMoveOut);


function wordMoveIn() {
    TweenLite.to(nextProject, 0.3, {
        left: "20px"
    });
}

function wordMoveOut() {
    TweenLite.to(nextProject, 0.3, {
        left: "0px"
    });
}

// next project


