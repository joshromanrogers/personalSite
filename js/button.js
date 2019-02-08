const buttonInit = () => {

    window.addEventListener('load', buttonAppear);

}

/* Button Appear */

const buttonAppear = () => {

    TweenMax.to(".myBtn", 1, {
        delay: 2,
        opacity: 1,
    });

}

buttonInit();