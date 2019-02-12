function homepageAnimation(i) {

    let homepageTl = new TimelineLite();
    console.log('initiate');

    i++;
    console.log(`.card-header${i}`);

    homepageTl
        .to(`.counter${i}`, 0.5, {
            autoAlpha: 0.1,
            x: 650,
        })
        .from(`.card-header${i}`, 1, {
            autoAlpha: 0,
            y: 50,
        }, "+=0.4")
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
        }, "-=0.3");
}