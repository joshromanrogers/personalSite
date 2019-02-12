document.addEventListener("mousemove", (e) => {

    const x = event.pageX;
    const y = event.pageY;

    const target = document.querySelector(".projectMain");
    const targetCoords = target.getBoundingClientRect();

    const targetX = targetCoords.left + (target.offsetWidth / 2);
    const targetY = targetCoords.top + (target.offsetHeight / 2);

    const angleX = (targetY - y) / 50;
    const angleY = (targetX - x) / -50;

    target.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;

});