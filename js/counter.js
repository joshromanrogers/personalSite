// counter function
// (min number, max number, time interval between executing function, query selector)

let counter = (min, max, speed, query) => {

    let counter = 0;
    let inc = -1;
    let stripName = document.querySelector(`.${query}`);


    // count every second
    setInterval(() => {
        if (counter == max) inc = -1; // once we reach max, start removing from counter
        if (counter == min) inc = 1; // once we reach min, start adding to counter
        counter += inc; // increment
        stripName.style.transform = `translate3d(${counter}px, 0px, 0px)`;
    }, speed);

}

counter(-1000, 0, 10, 'strip-name');
counter(0, 1000, 10, 'strip-large');