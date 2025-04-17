// #region === FOOTER ==============================

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  
    <div class="footer-container">
        <div>&emsp;©<span id="year"></span>&nbsp;Doberman on Graphics</div>
        <div>(626) 325-8182&emsp;Los Angeles 
        <span style="color: var(--ch1);">&emsp;&#x2B24;&emsp;</span>
        San Diego&emsp;(760) 456-9091&emsp;</div>
      </div>
    `;

    // Get the <span> element by its id and set it to the current year
    const yearSpan = this.querySelector('#year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }
}

customElements.define('site-footer', SiteFooter);

 // #endregion
// #region === NAVBAR ==============================

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="navbar-container">
        <nav id="navbar" class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html" id="navbar-logo">

              <svg xmlns="http://www.w3.org/2000/svg" xml: width="100%" height="100%" viewBox="0 0 600 100" 
              style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">

              <path               
              class="dog-letter letter-d"
              style="fill:var(--ch1);
              fill-rule:nonzero" 
              transform="matrix(.9836 0 0 1 0 0)"
              d="M0 1.909V18.96c9.856 1.458 10.492 4.262 10.81 7.631v46.82c-.318 3.256-1.272 6.173-10.81 7.631v17.051h120.17c25.752 0 49.903-.561 69.288-7.067 20.656-6.843 21.927-14.135 21.927-23.566V31.419c0-9.206-2.225-17.956-24.469-24.125-19.385-5.273-46.079-5.385-69.293-5.385H0Zm189.349 61.789A7.655 7.655 0 0 1 197 71.349 7.654 7.654 0 0 1 189.349 79a7.655 7.655 0 0 1-7.651-7.651 7.656 7.656 0 0 1 7.651-7.651ZM95.658 22.886h6.685c18.464 0 24.194 2.357 24.194 9.319V68.47c0 6.962-5.73 9.32-24.194 9.32h-6.685V22.886Z" 
              />

              <path               
              class="dog-letter letter-o"
              style="fill:var(--ch1);
              fill-rule:nonzero" 
              transform="matrix(.9836 0 0 1 0 0)"
              d="M412 29.735C412 5.946 370.688.001 310.599.001s-101.4 5.945-101.4 29.734v40.532c0 23.789 41.311 29.734 101.4 29.734 60.089 0 101.401-5.945 101.401-29.734V29.735Zm-117.953-1.572c0-.674-.954-7.41 16.552-7.41s16.553 6.736 16.553 7.41v43.563c0 .674.953 7.523-16.553 7.523s-16.552-6.849-16.552-7.523V28.163Zm93.802 35.535a7.655 7.655 0 0 1 7.651 7.651A7.654 7.654 0 0 1 387.849 79a7.655 7.655 0 0 1-7.651-7.651 7.656 7.656 0 0 1 7.651-7.651Z" 
              />

              <path 
              class="dog-letter letter-g"
              style="fill:var(--ch1);
              fill-rule:nonzero" 
              transform="matrix(.9836 0 0 1 0 0)"
              d="M610 11.106C580.127 3.029 541.673.001 504.467.001c-25.13 0-52.142 1.57-71.844 7.515-19.703 5.833-22.563 14.136-22.563 22.672v36.591c0 10.56 1.271 19.312 26.376 26.828 19.385 5.721 47.35 6.394 71.854 6.394 34.654 0 75.015-1.907 101.71-10.432V43.666h-96.294v18.731h14.625v4.269c0 4.382 2.542 12.583-16.234 12.583-15.915 0-17.189-5.28-17.189-6.291v-42.77c0-4.156 1.274-9.435 17.189-9.435 18.776 0 16.234 8.199 16.234 12.467v2.125H610V11.106Zm-18.849 52.592a7.656 7.656 0 0 1 7.651 7.651A7.655 7.655 0 0 1 591.151 79a7.654 7.654 0 0 1-7.651-7.651 7.655 7.655 0 0 1 7.651-7.651Z" 
              />

              </svg>     

            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="design.html">Design</a></li>
                <li class="nav-item"><a class="nav-link" href="logo.html">Logo</a></li>
                <li class="nav-item"><a class="nav-link" href="draw.html">Draw</a></li>
                <li class="nav-item"><a class="nav-link" href="photo.html">Photo</a></li>
                <li class="nav-item"><a class="nav-link" href="misc.html">Misc</a></li>
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

// #region === RESIZE IMAGE =======================
function resizeImagesToArea(targetArea) {
  const images = document.querySelectorAll("img");

  images.forEach(image => {
    // Wait for the image to load so we can get its natural dimensions
    image.onload = () => {
      const originalWidth = image.naturalWidth;
      const originalHeight = image.naturalHeight;

      // Calculate scaling factor
      const originalArea = originalWidth * originalHeight;
      const scalingFactor = Math.sqrt(targetArea / originalArea);

      // Calculate new dimensions and update the image
      const newWidth = Math.round(originalWidth * scalingFactor);
      const newHeight = Math.round(originalHeight * scalingFactor);

      image.width = newWidth;
      image.height = newHeight;
    };
  });
}

// Call the function with a constant area of 30,000
resizeImagesToArea(200000);