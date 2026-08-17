/* ==========================================================================
   FURLUND — shared site behaviour
   Header state, mobile menu, scroll reveal, contact form states.
   ========================================================================== */
(function () {
  'use strict';

  /* ---- Header scroll state ------------------------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 24) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Mobile menu ------------------------------------------------------ */
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    var closeMenu = function () {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    };
    var openMenu = function () {
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('is-open');
      document.body.classList.add('menu-open');
    };
    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---- Autoplay videos: no JS-driven load()/play() at all -------------
     iOS/WebKit grants autoplay-without-a-user-gesture based on the video
     being `autoplay muted playsinline` *in the markup the engine parses
     on initial load*. Any script that later calls `.load()` and/or
     `.play()` on that same element — even with `muted`/`playsinline`
     already set — can make WebKit treat it as a fresh, script-initiated
     play request and silently block it (no console error, video just
     sits on its poster). Two earlier passes here tried to "help" the
     browser via `IntersectionObserver` + manual `.load()`/`.play()`
     (with `canplay`/`loadeddata` waits, retries, etc.) — that is
     precisely the pattern that breaks iOS Safari. The fix is to do
     nothing: `autoplay muted playsinline loop` in the HTML plus a
     browser-appropriate `preload` is the entire mechanism. The only
     JS left below is a defensive `muted`/`defaultMuted` set (belt and
     braces for engines that ignore the attribute under some condition)
     that never touches `.load()` or `.play()`. Hero desktop/mobile
     source selection is handled entirely by the CSS media query in
     styles.css (`[data-hero-video]` display swap) — no JS needed. */
  document.querySelectorAll('video[autoplay]').forEach(function (video) {
    video.muted = true;
    video.defaultMuted = true;
  });

  /* ---- Scroll reveal ------------------------------------------------- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (revealEls.length) {
    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var groups = document.querySelectorAll('[data-reveal-group]');
      groups.forEach(function (group) {
        group.querySelectorAll('[data-reveal]').forEach(function (el, i) {
          el.style.setProperty('--i', i);
        });
      });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.16, rootMargin: '0px 0px -60px 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---- Contact form: sending / success / error states ----------------- */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var statusEl = form.querySelector('[data-form-status]');
    var submitBtn = form.querySelector('[data-form-submit]');

    var setStatus = function (state, message) {
      if (!statusEl) return;
      statusEl.classList.remove('form-status--sending', 'form-status--success', 'form-status--error');
      statusEl.classList.remove('is-visible');
      if (!state) return;
      statusEl.classList.add('form-status--' + state, 'is-visible');
      statusEl.textContent = message;
      statusEl.setAttribute('role', state === 'error' ? 'alert' : 'status');
    };

    var validate = function () {
      var valid = true;
      form.querySelectorAll('[required]').forEach(function (field) {
        var wrap = field.closest('.field');
        var errorEl = wrap ? wrap.querySelector('.field__error') : null;
        var fieldValid = field.checkValidity();
        if (!fieldValid) valid = false;
        if (wrap) wrap.classList.toggle('field--error', !fieldValid);
        if (errorEl) {
          errorEl.textContent = fieldValid ? '' : (field.dataset.errorMessage || 'Заповніть це поле');
        }
      });
      return valid;
    };

    form.querySelectorAll('[required]').forEach(function (field) {
      field.addEventListener('blur', function () {
        var wrap = field.closest('.field');
        var errorEl = wrap ? wrap.querySelector('.field__error') : null;
        var fieldValid = field.checkValidity();
        if (wrap) wrap.classList.toggle('field--error', !fieldValid);
        if (errorEl) errorEl.textContent = fieldValid ? '' : (field.dataset.errorMessage || 'Заповніть це поле');
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      setStatus(null);

      if (!validate()) {
        setStatus('error', 'Перевірте позначені поля — деяких обов’язкових даних бракує');
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      setStatus('sending', 'Надсилаємо запит…');

      /* Демо-патерн: бекенд не підключено. Імітація мережевого запиту, щоб
         стани «надсилаємо / успіх / помилка» можна було перевірити наживо. */
      window.setTimeout(function () {
        var shouldFail = form.dataset.simulateError === 'true';
        if (shouldFail) {
          setStatus('error', 'Не вдалося надіслати. Спробуйте ще раз або напишіть напряму на studio@furlund.ua');
          if (submitBtn) submitBtn.disabled = false;
          return;
        }
        setStatus('success', 'Дякуємо. Студія відповість протягом двох робочих днів');
        form.reset();
        if (submitBtn) submitBtn.disabled = false;
      }, 1100);
    });
  }

  /* ---- Current year in footer ----------------------------------------- */
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
