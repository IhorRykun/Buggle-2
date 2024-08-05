const scrollToTopButton = document.getElementById('scrollToTopButton');

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

scrollToTopButton.addEventListener('click', scrollToTop);

const toggleScrollToTopButton = () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
};

window.addEventListener('scroll', toggleScrollToTopButton);

toggleScrollToTopButton();
