javascript
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

const mobileLinks = document.querySelectorAll('.mobile-menu a');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// HEADER EFFECT
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(0,0,0,0.95)';
  } else {
    header.style.background = 'rgba(0,0,0,0.8)';
  }
});

// FAKE FORM SUBMIT
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  alert('Agendamento enviado com sucesso!');

  form.reset();
});
