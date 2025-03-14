// #region === NAVBAR HIDE/SHOW ON SCROLL ==========

// Throttle function: runs fn at most once every wait milliseconds.
function throttle(fn, wait) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

let lastScrollY = window.scrollY;
const pixelDeltaThreshold = 50; // Only update if scrolled 50px more than last update

window.addEventListener(
  "scroll",
  throttle(function () {
    const navbar = document.getElementById("navbar-container"); 
    const currentScrollY = window.scrollY;
    
    // Update only if the pixel difference is significant
    if (Math.abs(currentScrollY - lastScrollY) >= pixelDeltaThreshold) {
      // You can add your logic here; for example, check if scrolled down:
      if (currentScrollY > lastScrollY && currentScrollY > 500) {
        // Hide navbar when scrolling down beyond 500px from top, for instance.
        navbar.classList.add("scrolled");
      } else if (currentScrollY < lastScrollY) {
        // Show navbar when scrolling up.
        navbar.classList.remove("scrolled");
      }
      lastScrollY = currentScrollY; // update last reference
    }
  }, 100) // Check at most once every 100ms
);

// #endregion
// #region === VIEWPORT SIZE =======================

function updateViewportSize() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	document.getElementById('viewport-size').textContent = `${width}W x ${height}H`;
  }
  // Update on page load
  window.addEventListener('load', updateViewportSize);
  // Update on window resize
  window.addEventListener('resize', updateViewportSize);
  
  // #endregion