const backButton = document.getElementById('backButton');

function handleBackButtonClick() {
  window.location.href = 'index.html';
}

if (backButton) {
  backButton.addEventListener('click', handleBackButtonClick);
}
