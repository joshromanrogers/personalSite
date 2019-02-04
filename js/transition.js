window.onload = () => {
    Barba.Pjax.start();
    console.log('start');
}

var transitionAnimation = Barba.BaseTransition.extend({
    start: function () {
        Promise
            .all([this.newContainerLoading, this.startTransition()])
            .then(this.fadeIn.bind(this));
    },

    startTransition: function () {
        let oldWrap = this.oldContainer;
        oldWrap.classList.toggle('fade-out');
        console.log('fadeOut done');

        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                resolve();
            }, 700);
        });
        

    },
    fadeIn: function () {
        var newWrap = this.newContainer;
        newWrap.classList.toggle('fade-in');
        this.done();
        console.log('fadeIn done');
    }
});

Barba.Pjax.getTransition = function () {
    return transitionAnimation;
};

// startTransition: function () {

//     let outTransition = new TimelineMax();

//     outTransition
//     .set("transition-block", {display: "block", x: "100%"})
//     .staggerFromTo("transition-block", 1, {x: "100%"}, {x: "-100%", ease: Expo.easeOut}, 0.2)
//     .staggerFromTo("transition-block", 1, {x: "-100%"}, {x: "-200%", ease: Expo.easeOut}, 0.2)

//     console.log('blocks transitioned');

//     let oldWrap = this.oldContainer;
//     oldWrap.classList.toggle('fade-out');
//     console.log('fadeOut done');

//     return new Promise(function (resolve, reject) {
//         window.setTimeout(function () {
//             resolve();
//         }, 700);
//     });

// },

// fadeIn: function () {
//     let oldWrap = this.oldContainer;
//     let newWrap = this.newContainer;
//     newWrap.classList.toggle('fade-in');


//             TweenMax.set(oldWrap, { display: "none" });
//             TweenMax.set(newWrap, { visibility: "visible", opacity: 0, });
           
           
//         //     TweenMax.to(".loader", 1, {y:-50, autoAlpha: 0, ease: Expo.easeOut})
//         //    TweenMax.fromTo(".title", 1.5, {y:30, autoAlpha: 0},{delay:0.8, y:0, autoAlpha: 1, ease: Expo.easeOut})

//             TweenMax.to(newWrap, 0.1, {
//                 opacity: 1,
//             });

//             this.done();
//             console.log('fadeIn done');
// }