const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => navMenu.classList.toggle('is-open'));
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('is-open'));
  });
}

const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('formMessage').textContent = 'Solicitud registrada. Luego se puede conectar a WhatsApp, correo o base de datos.';
    quoteForm.reset();
  });
}

const claimForm = document.getElementById('claimForm');
if (claimForm) {
  claimForm.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('claimMessage').textContent = 'Registro generado en modo demostración. Falta conectar envío real.';
    claimForm.reset();
  });
}
