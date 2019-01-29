// skewer for project page

let container = document.getElementsByClassName('container')[0];
let project = document.getElementsByClassName('project1')[0];
let currentPixel = window.pageYOffset

const looper = () => {
      const newPixel = window.pageYOffset;
      const diff = newPixel - currentPixel;
      const speed = diff * 0.25;

      container.style.transform = `skewY(${speed}deg)`;

      currentPixel = newPixel;

      requestAnimationFrame(looper);
}

looper();