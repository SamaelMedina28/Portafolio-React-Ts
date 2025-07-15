document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".skills-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1.5,
      slideShadows: false,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    on: {
      init: function () {
        // Add hover effect for better UX
        const slides = document.querySelectorAll(".swiper-slide");
        slides.forEach((slide) => {
          slide.addEventListener("mouseenter", () => {
            swiper.autoplay.stop();
          });
          slide.addEventListener("mouseleave", () => {
            swiper.autoplay.start();
          });
        });
      },
    },
  });
});

// Función para el menú móvil
function initMobileMenu() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!mobileMenuButton || !mobileMenu) return;

  let isMenuOpen = false;

  // Función para alternar el menú
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("block");

    // Cambiar el ícono del botón
    if (isMenuOpen) {
      mobileMenuButton.innerHTML = `
        <span class="sr-only">Cerrar menú</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      `;
      mobileMenuButton.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    } else {
      mobileMenuButton.innerHTML = `
        <span class="sr-only">Abrir menú principal</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      `;
      mobileMenuButton.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "auto";
    }
  }

  // Evento de clic en el botón del menú
  mobileMenuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Cerrar el menú al hacer clic en un enlace
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) {
        toggleMenu();
      }
    });
  });

  // Cerrar el menú al hacer clic fuera de él
  document.addEventListener("click", (e) => {
    if (
      isMenuOpen &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuButton.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // Cerrar el menú al cambiar el tamaño de la ventana
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      toggleMenu();
    }
  });
}

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar menú móvil
  initMobileMenu();

  // Inicializar el botón "Ver más proyectos"
  const verMasBtn = document.getElementById("verMasBtn");
  if (verMasBtn) {
    let proyectosMostrados = false;

    verMasBtn.addEventListener("click", function () {
      const btn = this;

      if (!proyectosMostrados) {
        // Mostrar más proyectos
        document.querySelectorAll(".project-item.hidden").forEach((item) => {
          item.classList.remove("hidden");
        });
        btn.textContent = "Ver menos";
      } else {
        // Ocultar proyectos adicionales
        const todosLosProyectos = document.querySelectorAll(".project-item");
        todosLosProyectos.forEach((item, index) => {
          if (index >= 6) {
            // Ajusta este número según cuántos proyectos quieras mostrar inicialmente
            item.classList.add("hidden");
          }
        });
        btn.textContent = "Ver más";
      }

      // Invertir el estado
      proyectosMostrados = !proyectosMostrados;
    });
  }

  // Manejo del formulario de contacto
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Deshabilitar el botón de envío
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...';

      // Obtener los datos del formulario
      const formData = new FormData(contactForm);

      try {
        // Enviar el formulario a Formspree
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        // Manejar la respuesta
        if (response.ok) {
          // Éxito: mostrar mensaje de éxito
          formStatus.innerHTML = '<div class="text-green-400"><i class="fas fa-check-circle mr-2"></i>¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.</div>';
          contactForm.reset();
        } else {
          // Error: mostrar mensaje de error
          const data = await response.json().catch(() => ({}));
          throw new Error(data.error || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        }
      } catch (error) {
        // Mostrar mensaje de error
        formStatus.innerHTML = `<div class="text-red-400"><i class="fas fa-exclamation-circle mr-2"></i>${error.message || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'}</div>`;
        console.error('Error al enviar el formulario:', error);
      } finally {
        // Restaurar el botón
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        // Desvanecer el mensaje después de 5 segundos
        setTimeout(() => {
          formStatus.style.opacity = '0';
          setTimeout(() => {
            formStatus.innerHTML = '';
            formStatus.style.opacity = '1';
          }, 500);
        }, 5000);
      }
    });
  }

  // Efecto de carga suave para los elementos de la sección de contacto
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('#contacto > div > *').forEach((el, index) => {
    el.classList.add('opacity-0', 'translate-y-6');
    el.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
    observer.observe(el);
  });
});
