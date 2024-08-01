document.addEventListener('DOMContentLoaded', function () {
  const footerLinksContainer = document.getElementById(
    'footer-links-container'
  );

  console.log(footerLinksContainer);

  function loadFooterLinks() {
    fetch('partials/footer-links.html')
      .then(response => response.text())
      .then(data => {
        if (footerLinksContainer) {
          footerLinksContainer.innerHTML = data;
        }
      })
      .catch(error => console.error('Error loading footer links:', error));
  }

  function checkAndToggleFooterLinks() {
    if (window.innerWidth < 1440) {
      footerLinksContainer.style.display = 'none';
    } else {
      footerLinksContainer.style.display = '';
    }
  }

  loadFooterLinks();
  checkAndToggleFooterLinks();
  window.addEventListener('resize', checkAndToggleFooterLinks);
});
