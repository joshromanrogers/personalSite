// first screen to home screen animation 
//
// when the button is clicked:
// 1. headings move up and fade out
// 2. first screen moves up and fades out
// 3. same occurs with overlay
// 4. same occurs with overlay-2
// 5. homepage fades in
// 6.
// 

function fadeOut() {

    let tl = new TimelineLite();

    tl.to([".rev-block", ".myBtn"], 1, {
            y: "-100%",
            opacity: 0
        }, "+=0.5")
        .to(".screen", 1, {
            y: "-100%",
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=1.5")
        .to(".overlay", 2, {
            top: "-110%",
            ease: Expo.easeInOut,
            delay: 0.8
        }, "-=0.5")
        .to(".overlay-2", 1.2, {
            top: "-110%",
            ease: Expo.easeInOut
        }, "-=1.2")
        .from(".card-header1", 1, {
            autoAlpha: 0,
            y: 50,
        }, "-=0.5")
        .from(".card-para1", 1, {
            autoAlpha: 0,
            y: 50,
        }, "-=0.5")
        .from(".card-link1", 1, {
            autoAlpha: 0,
            x: -50,
        }, "-=0.5")
        .from(".card-theme1", 1, {
            autoAlpha: 0,
            y: 50,
        }, "-=0.5")

}