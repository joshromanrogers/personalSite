const images = ['../imgs/art1.jpg', '../imgs/goldenGai2.jpg', '../imgs/misc5.jpg', '../imgs/orange2.png'];
let collageBody = document.querySelector('.collage-body');

let i = 0;

const placeImage = (x, y) => {

    const nextImage = images[i];

    // create img element, 
    // set the src as an img in the images array,
    // give top left coords based on x and y input values
    const img = document.createElement("img")
    img.setAttribute("src", nextImage);
    img.classList.add("collage-img");
    img.style.left = (x / 10) + '%';
    img.style.top = (y / 10) + '%';
    img.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.1 + 0.2}) rotate(${Math.random() * 20 - 10}deg)`;

    // add to page
    collageBody.appendChild(img);

    i = i + 1;

    // loop back to first image when the end of images array reached
    if (i >= images.length) {
        i = 0;
    }

}

// when user clicks, add image based on event/cursor xy position
document.addEventListener('click', (event) => {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
})

// same as above, but for mobile
document.addEventListener('touchend', (event) => {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
})