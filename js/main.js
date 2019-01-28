const pageInit = () => {
    window.addEventListener('load', buttonAppear);
}

/* Button Appear */

const buttonAppear = () => {

    TweenMax.to(".myBtn", 1, {
        delay: 3,
        opacity: 1,
    });

}

pageInit();