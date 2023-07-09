

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const targetOffsetTop = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetOffsetTop - startPosition;
    const duration = 1000; // Set the duration of scrolling (in milliseconds)
    let startTime = null;

    function scrollAnimation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      const elapsedTime = currentTime - startTime;
      const scrollProgress = Math.min(elapsedTime / duration, 1);
      const ease = easeInOutQuad(scrollProgress);
      const newPosition = startPosition + distance * ease;
      window.scrollTo(0, newPosition);

      if (elapsedTime < duration) {
        window.requestAnimationFrame(scrollAnimation);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    window.requestAnimationFrame(scrollAnimation);
  });
});
