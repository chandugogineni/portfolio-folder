document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Replace this placeholder with your real credential or social-profile URL.');
  });
});
