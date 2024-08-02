const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#') && targetId.length > 1) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
        if (mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          mobileMenuButton.classList.remove('open');
          body.classList.remove('no-scroll');
        }
      }
    } else {
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileMenuButton.classList.remove('open');
        body.classList.remove('no-scroll');
      }
    }
  });
});
