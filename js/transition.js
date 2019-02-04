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

        var outTransition = new TimelineMax();

        outTransition
                .set(".transition-blocks-animate", {zIndex:5})
                .set(".transition-block", {display:'block', x: "-100%"}, "-=0.7")
                .staggerFromTo(".transition-block", 1.5, {x: "-100%"},{x: "0%", ease: Expo.easeOut}, 0.2, "-=0.7")
                .staggerFromTo(".transition-block", 1, {x: "0%"},{x: "100%", ease: Expo.easeIn}, 0.2,"-=0.5")
                .set(".transition-block", {display:'none'})

        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                resolve();
            }, 1300);
        });

    },
    fadeIn: function () {

        this.done();

    }
});

Barba.Pjax.getTransition = function () {
    return transitionAnimation;
};