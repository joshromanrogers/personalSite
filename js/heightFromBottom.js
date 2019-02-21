// within 200px - start the transform: translate3d y
// for the y value, use the same value back make it negative

// same translation with the copy / 'next project =>'

// scale3d(1.5, 1.5, 1) => scale(1, 1, 1)

// onscroll function, whenever user scrolls check to see if close enough.

let nextProjectImage = document.querySelector('.next-project-img');
let nextProjectText = document.querySelector('.next-project-text');
let projectMainImage = document.querySelector('.project-main-image');
let mainImageText = document.querySelector('.main-image-text');

zoomOutOnScroll = () => {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollPosition = window.innerHeight + window.pageYOffset;
    let distanceFromBottom = scrollHeight - scrollPosition;
    // console.log(scrollHeight, scrollPosition, distanceFromBottom, window.pageYOffset);

    if ((distanceFromBottom) < 400) {
        console.log(scrollHeight);
        nextProjectImage.style.transform = `translate3d(0px, ${-distanceFromBottom}px, 0px)`;
        nextProjectImage.style.transform = `scale3d(${(distanceFromBottom/1000) + 1}, ${(distanceFromBottom/1000) + 1}, 1)`;

        nextProjectText.style.transform = `translate3d(0px, ${(distanceFromBottom)}px, 0px)`;
        // nextProjectText.style.transform = `scale3d(${(distanceFromBottom/1000) + 1}, ${(distanceFromBottom/1000) + 1}, 1)`;
    }

    if ((window.pageYOffset) < 1000) {
        projectMainImage.style.transform = `translate3d(0px, ${-window.pageYOffset}px, 0px)`;
        projectMainImage.style.transform = `scale3d(${(window.pageYOffset/3000) + 1}, ${(window.pageYOffset/3000) + 1}, 1)`;

        mainImageText.style.transform = `translate3d(0px, ${-(window.pageYOffset)}px, 0px)`;
        // nextProjectText.style.transform = `scale3d(${(distanceFromBottom/1000) + 1}, ${(distanceFromBottom/1000) + 1}, 1)`;
    }

}


document.addEventListener("scroll", zoomOutOnScroll);