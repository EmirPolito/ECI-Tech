// Menú móvil del header
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });

    // Validación y redirección del login
    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passError = document.getElementById('passError');

    // Toggle para ver contraseña
    const togglePassword = document.getElementById('togglePassword');
    const eyeIcon = document.getElementById('eyeIcon');
    
    togglePassword.addEventListener('click', function (e) {
      e.preventDefault();
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      
      if (type === 'password') {
        // Icono de ojo abierto
        eyeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />';
      } else {
        // Icono de ojo tachado
        eyeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />';
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      if (!email.value.trim() || !email.value.includes('@')) {
        emailError.classList.remove('hidden');
        valid = false;
      } else {
        emailError.classList.add('hidden');
      }

      if (!password.value.trim()) {
        passError.classList.remove('hidden');
        valid = false;
      } else {
        passError.classList.add('hidden');
      }

      if (valid) {
        window.location.href = 'menu.php';
      }
    });