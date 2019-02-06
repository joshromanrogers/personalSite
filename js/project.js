let mainImg = document.querySelector('#project-main-img');
let projectHeader = document.querySelector('.projectHeader');
console.log(mainImg);


function imageDown() {
    let projectTl = new TimelineLite();

    projectTl
        .set(mainImg, {
            scaleX: 0.4,
            scaleY: 0.4
        })
        .from(mainImg, 1, {
            top: -1000,
            opacity: 0
        })
        .to(mainImg, 1, {
            scaleX: 1.2,
            scaleY: 1.2
        })
        .to(projectHeader, 2, {
            opacity: 1,
            top: -250
        })

    console.log('executed');
}