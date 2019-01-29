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
        .from(".overlay", 1, {
            ease: Power2.easeInOut
        })
        .to(".overlay", 1, {
            top: "-110%",
            ease: Expo.easeInOut,
            delay: 0.8
        }, "-=1")
        .to(".overlay-2", 1, {
            top: "-110%",
            ease: Expo.easeInOut
        }, "-=0.25")
        .from(".content", 1.5, {
            opacity: 0
        }, "-=0.5")
        .to(".content", 1.5, {
            opacity: 1,
            y: "-50%"
        }, "-=0.5")
        .from(".card-header", 3, {
            opacity: 0
        }, "-=1.5");

}