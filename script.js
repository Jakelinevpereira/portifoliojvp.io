document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-dark-mode");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });
  }

  const toggleBtn2 = document.getElementById("menu-toggle");
  const menuLinks = document.querySelector(".menu-links");

  if (toggleBtn2 && menuLinks) {
    toggleBtn2.addEventListener("click", () => {
      menuLinks.classList.toggle("active");
    });
  }
});

// Bloquear clique direito em toda a página
document.addEventListener('contextmenu', event => event.preventDefault());

// Bloquear arrastar imagens na página
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('dragstart', e => e.preventDefault());
});

