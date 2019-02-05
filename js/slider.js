// project slider
let content = document.getElementsByClassName('content')[0];
let homeSlide = document.getElementsByClassName('slide');
let slideNavPrev = document.getElementById("prev");
let slideNavNext = document.getElementById("next");
let sliderCounter = 0;

// next slide using GSAP timeline
function goToNextSlide(slideOut, slideIn, slideInAll) {
    let tl = new TimelineLite();
    let slideOutContent = slideOut.getElementsByClassName('card-content')[0];
    let slideInContent = slideIn.getElementsByClassName('card-content')[0];
    let slideOutImg = slideOut.getElementsByClassName('card-img')[0];
    let slideInImg = slideIn.getElementsByClassName('card-img')[0];

    let index = indexInParent(slideIn);
    let size = homeSlide.length;

    //
    // when the button is clicked:
    // 1. next slide gains active class
    // 2. original slide loses active class
    // 3. original slide content and image up and out
    // 4. next slide comes down and in
    // 

    if (slideIn.length !== 0) {
        tl
            .set(slideIn, {
                autoAlpha: 1,
                className: '+=active'
            })
            .set(slideOut, {
                className: '-=active'
            })
            .to(slideOutContent, 0.65, {
                y: "+=40px",
                ease: Power3.easeInOut
            }, 0)
            .to(slideOutImg, 0.65, {
                backgroundPosition: 'bottom',
                ease: Power3.easeInOut
            }, 0)
            .to(slideInAll, 1, {
                y: "-=100%",
                ease: Power3.easeInOut
            }, 0)
            .fromTo(slideInContent, 0.65, {
                y: '-=40px'
            }, {
                y: 0,
                ease: Power3.easeInOut
            }, "-=0.7")
            .fromTo(slideInImg, 0.65, {
                backgroundPosition: 'top'
            }, {
                backgroundPosition: 'bottom',
                ease: Power3.easeInOut
            }, '-=0.7')
    }

    TweenMax.set(slideNavPrev, {
        autoAlpha: 1
    });

    if (index === size - 1) {
        TweenMax.to(slideNavNext, 0.3, {
            autoAlpha: 0.2,
            ease: Linear.easeNone
        });
    }
};

// on clicking down button, go to next slide
slideNavNext.onclick = (e) => {
    e.preventDefault();
    console.log(sliderCounter);
    if (sliderCounter < 2) {
        let slideOut = document.getElementsByClassName('slide active')[0];
        let slideIn = document.getElementsByClassName('slide active')[0].nextElementSibling;
        let slideInAll = document.getElementsByClassName('slide');

        goToNextSlide(slideOut, slideIn, slideInAll);
        sliderCounter++;
    }
}

// let lastScrollTop = 0;
// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// content.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    if (st > lastScrollTop){
//       // downscroll code
//       console.log('downscroll')
//    }
//    else if(st == lastScrollTop)
//    {
//      //do nothing 
//      //In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one
//    }
//    else {
//       // upscroll code
//       console.log('upscroll');
//    }
//    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);


// figure out index position in parent
function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i = 0; i < children.length; i++) {
        if (children[i] == node) return num;
        if (children[i].nodeType == 1) num++;
    }
    return -1;
}

// go to previous slide using GSAP timeline
function goToPrevSlide(slideOut, slideIn, slideInAll) {
    var tl = new TimelineLite();
    let slideOutContent = slideOut.getElementsByClassName('card-content')[0];
    let slideInContent = slideIn.getElementsByClassName('card-content')[0];
    let slideOutImg = slideOut.getElementsByClassName('card-img')[0];
    let slideInImg = slideIn.getElementsByClassName('card-img')[0];

    let index = indexInParent(slideIn);
    let size = homeSlide.length;

    if (slideIn.length !== 0) {
        tl
            .set(slideIn, {
                autoAlpha: 1,
                className: '+=active'
            })
            .set(slideOut, {
                className: '-=active'
            })
            .to(slideOutContent, 0.65, {
                y: "-=40px",
                ease: Power3.easeInOut
            }, 0)
            .to(slideOutImg, 0.65, {
                backgroundPosition: 'top',
                ease: Power3.easeInOut
            }, 0)
            .to(slideInAll, 1, {
                y: "+=100%",
                ease: Power3.easeInOut
            }, 0)
            .fromTo(slideInContent, 0.65, {
                y: '+=40px'
            }, {
                y: 0,
                ease: Power3.easeInOut
            }, "-=0.7")
            .fromTo(slideInImg, 0.65, {
                backgroundPosition: 'bottom'
            }, {
                backgroundPosition: 'top',
                ease: Power3.easeInOut
            }, '-=0.7')
    }

    TweenMax.set(slideNavPrev, {
        autoAlpha: 1
    });

    if (index === 0) {
        TweenMax.to(slideNavPrev, 0.3, {
            autoAlpha: 0.2,
            ease: Linear.easeNone
        });
    }
};

// when clicking on up button, fire goToPrevSlide function
slideNavPrev.onclick = (e) => {
    e.preventDefault();
    if (sliderCounter > 0) {

        let slideOut = document.getElementsByClassName('slide active')[0];
        let slideIn = document.getElementsByClassName('slide active')[0].previousElementSibling;
        let slideInAll = document.getElementsByClassName('slide');

        goToPrevSlide(slideOut, slideIn, slideInAll);
        sliderCounter--;
    }
}