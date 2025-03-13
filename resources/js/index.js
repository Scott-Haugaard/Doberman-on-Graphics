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