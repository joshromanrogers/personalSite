window.onload = () => {
    Barba.Pjax.start();
    console.log('start');
}

var FadeTransition = Barba.BaseTransition.extend({
    start: function () {
        Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
    },

    fadeOut: function () {
        var oldWrap = this.oldContainer;
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
    return FadeTransition;
};