document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const body = document.body;

  mobileMenuButton.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenuButton.classList.toggle('open');
    body.classList.toggle('no-scroll', isOpen);
  });
});
