function homepageAnimation(i) {

    let homepageTl = new TimelineLite();
    console.log('initiate');

    i++;
    console.log(`.card-header${i}`);

    homepageTl
        .from(`.card-header${i}`, 1, {
            autoAlpha: 0,
            y: 50,
        }, "+=0.9")
        .from(`.card-para${i}`, 1, {
            autoAlpha: 0,
            y: 50,
        }, "-=0.5")
        .from(`.card-link${i}`, 1, {
            autoAlpha: 0,
            x: -50,
        }, "-=0.5")
        .from(`.card-theme${i}`, 1, {
            autoAlpha: 0,
            y: 50,
        }, "-=0.5");
}