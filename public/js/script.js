// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Auto-dismiss flash alerts after 5 seconds (matches CSS progress bar)
document.querySelectorAll('.alert-wl').forEach(alertEl => {
  setTimeout(() => {
    const bsAlert = bootstrap.Alert.getOrCreateInstance(alertEl);
    bsAlert.close();
  }, 5000);
});

// Sticky navbar scroll shadow
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Category filter horizontal scrolling
const filters = document.getElementById('filters');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

if (filters && scrollLeftBtn && scrollRightBtn) {
  scrollLeftBtn.addEventListener('click', () => {
      filters.scrollBy({ left: -200, behavior: 'smooth' });
  });

  scrollRightBtn.addEventListener('click', () => {
      filters.scrollBy({ left: 200, behavior: 'smooth' });
  });
}