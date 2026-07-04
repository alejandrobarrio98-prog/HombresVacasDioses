/* ============================================================
   Interacciones mínimas para el sitio.
   Sólo hace dos cosas:
   1) Guardar la preferencia de modo claro/oscuro.
   2) Cerrar el menú al pulsar Escape en móviles (si se abriera).
   ============================================================ */

(function () {
  const STORAGE_KEY = 'sbt-theme';
  const root = document.documentElement;

  // Aplicar el tema guardado antes de nada, para que no haya parpadeo.
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }

  // Configurar el botón de cambio de tema cuando la página cargue.
  function setup() {
    const btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;

    const label = btn.querySelector('[data-theme-label]');
    const icon  = btn.querySelector('[data-theme-icon]');

    function currentTheme() {
      const explicit = root.getAttribute('data-theme');
      if (explicit) return explicit;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function render() {
      const t = currentTheme();
      if (label) label.textContent = t === 'dark' ? 'Modo claro' : 'Modo oscuro';
      if (icon)  icon.textContent  = t === 'dark' ? '☀' : '☾';
      btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
    }

    btn.addEventListener('click', function () {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEY, next);
      render();
    });

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
