const cursor = document.getElementsByClassName('c-cursor')[0];
const cursorInner = document.getElementsByClassName('c-cursor__inner')[0];
const cursorWidth = cursor.getBoundingClientRect().width;
const cursorHeight = cursor.getBoundingClientRect().height;
const links = document.querySelectorAll("a, button");


let isMoving = false; /* throttle */
let xPos = 0;
let yPos = 0;
let activeCursor = false;
let currentTarget = null;

const init = () => {
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
  
  init();