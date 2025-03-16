// #region === NAVBAR ==============================

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="navbar-container">
        <nav id="navbar" class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html"><img src="resources/images/DOGlogo.svg" alt="Site Logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="design.html">Design</a></li>
                <li class="nav-item"><a class="nav-link" href="branding.html">Branding</a></li>
                <li class="nav-item"><a class="nav-link" href="illustration.html">Illustration</a></li>
                <li class="nav-item"><a class="nav-link" href="photography.html">Photography</a></li>
                <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    `;

// Set the Active Class to Current Path

    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === "") {
      currentPage = "index.html";
    }

    const navLinks = this.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');

      if (linkHref === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }
}

customElements.define('site-header', SiteHeader);

// #endregion  
// #region === NAVBAR HIDE/SHOW ON SCROLL ==========

// Throttle runs every Wait period at bottom
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
const pixelDeltaThreshold = 50; // Update if scrolled more than 50px

window.addEventListener("scroll", throttle(function () {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  
  const currentScrollY = window.scrollY;
  
  if (Math.abs(currentScrollY - lastScrollY) >= pixelDeltaThreshold) {
    if (currentScrollY > lastScrollY && currentScrollY > 500) { // Hide past 500px
      navbar.classList.add("scrolled");
    } else if (currentScrollY < lastScrollY) { // Show scrolling Up by Delta above
      navbar.classList.remove("scrolled");
    }
    lastScrollY = currentScrollY;
  }
}, 100)); // Wait 100 ms


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
