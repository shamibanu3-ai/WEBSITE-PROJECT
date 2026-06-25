// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.innerHTML = isOpen
    ? '<span class="icon icon-close" aria-hidden="true"></span>'
    : '<span class="icon icon-bars" aria-hidden="true"></span>';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.innerHTML = '<span class="icon icon-bars" aria-hidden="true"></span>';
  });
});

// File input label update
const fileInput = document.getElementById('file-upload');
const fileLabel = document.getElementById('fileLabel');

fileInput.addEventListener('change', () => {
  fileLabel.textContent = fileInput.files.length
    ? fileInput.files[0].name
    : 'Choose a PDF file to upload';
});
