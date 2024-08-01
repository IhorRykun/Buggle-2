document.addEventListener('DOMContentLoaded', function () {
  const footerLinksContainer = document.getElementById(
    'footer-links-container'
  );

  function checkAndToggleFooterLinks() {
    if (window.innerWidth < 1440) {
      footerLinksContainer.style.display = 'none';
    } else {
      footerLinksContainer.style.display = '';
    }
  }

  checkAndToggleFooterLinks();
  window.addEventListener('resize', checkAndToggleFooterLinks);
});
