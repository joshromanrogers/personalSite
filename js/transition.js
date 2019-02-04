window.onload = () => {
    project1.init();
    Barba.Pjax.start();
}

var transitionAnimation = Barba.BaseTransition.extend({
    start: function () {
        Promise
            .all([this.newContainerLoading, this.startTransition()])
            .then(this.fadeIn.bind(this));
    },

   startTransition: function () {

    let outTransition = new TimelineMax();
    
    // Page Transition GSAP Timeline:
    // 1. Bring the blocks to the front
    // 2. Set each block out of view (to the left)
    // 3. Stagger (by 0.2s) each of the blocks movement onto the screen to cover it
    // 4. Stagger (by 0.2s) each of the blocks movement off of the screen
    // 5. Bring the blocks to the back (z-index: 0)

    outTransition
    .set(".transition-blocks-animate", {zIndex:6})
    .set(".transition-block", {display: "block", x: "-100%", zIndex:5})
    .staggerFromTo(".transition-block", 1, {x: "-100%"}, {x: "0%", ease: Expo.easeOut}, 0.2)
    .staggerFromTo(".transition-block", 1, {x: "0%"}, {x: "100%", ease: Expo.easeOut}, 0.2)
    .set(".transition-blocks-animate", {zIndex:0})
    .set(".transition-block", {zIndex:0})

    // Wait 1.5s for the promise to resolve = wait 1.5s for the next page to load.
    return new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            resolve();
        }, 1500);
    });
 
},
        

   
fadeIn: function () {

            this.done();

}
});

Barba.Pjax.getTransition = function () {
    return transitionAnimation;
};

var project1 = Barba.BaseView.extend({
    namespace: 'project-1',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        // below are event listeners / functions etc. to be used on the next page.

        // imageMovement.js - image rotates
        document.addEventListener("mousemove", (e) => {

            const x = event.pageX;
            const y = event.pageY;
        
            const target = document.querySelector(".projectMain");
            const targetCoords = target.getBoundingClientRect();
        
            const targetX = targetCoords.left + (target.offsetWidth / 2);
            const targetY = targetCoords.top + (target.offsetHeight / 2);
        
            const angleX = (targetY - y) / 22.5;
            const angleY = (targetX - x) / -22.5;
        
            target.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        
        });


        // skew.js - skew page on scroll
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

        // cursor
        const cursor = document.getElementsByClassName('c-cursor')[0];
        const cursorInner = document.getElementsByClassName('c-cursor__inner')[0];
        const cursorWidth = cursor.getBoundingClientRect().width;
        const cursorHeight = cursor.getBoundingClientRect().height;
        const links = document.querySelectorAll("a, button");

        let isScrolling = false;
        let isMoving = false; /* throttle */
        let xPos = 0;
        let yPos = 0;
        let activeCursor = false;
        let currentTarget = null;

        const cursorInit = () => {
            window.addEventListener('scroll', handleScroll, false);
            window.addEventListener('mousemove', handleMouseMove);

            /* Active on hover */
            for (let i = 0; i < links.length; i++) {
                const link = links[i];
                link.addEventListener('mouseover', handleActiveCursor);
                link.addEventListener('mouseout', handleDeactiveCursor);
            }
        };


        /* Movement */

        const handleMouseMove = e => {
            if (!isMoving) {
                setPos(e.pageX - (cursorWidth / 2), e.pageY - (cursorHeight / 2));
                requestAnimationFrame(updateCursor);
            }
            isMoving = true;
        };

        const setPos = (x, y) => {
            xPos = x;
            yPos = y;
        };


        const updateCursor = () => {
            isMoving = false;

            TweenLite.to(cursor, 0.1, {
                x: `${xPos}px`,
                y: `${yPos}px`,
                opacity: 1 /* Making it visible on init */ ,
                ease: Power4.easeOut
            });
        };

        /* Active cursor */

        const handleActiveCursor = e => {
            activeCursor = true;
            currentTarget = e.currentTarget;
            updateActiveCursor();
        };

        const handleDeactiveCursor = () => {
            activeCursor = false;
            currentTarget = null;
            updateActiveCursor();
        };

        const updateActiveCursor = () => {
            if (activeCursor) {
                cursor.classList.add('is-active');

            } else {
                cursor.classList.remove('is-active');

            }
        };

        /* on scroll, keep the cursor in the correct place */

        const handleScroll = () => {
            if (!isScrolling) {
                requestAnimationFrame(updateScroll);
            }
            isScrolling = true;
        };

        const updateScroll = () => {
            isScrolling = false;

        };

        cursorInit();
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
    }
  });
  

