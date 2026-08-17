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

  /* ---- Decorative autoplay videos: play only once actually ready, retry
     once on rejection ----------------------------------------------------
     Calling `.play()` immediately after `.load()` while `readyState` is
     still 0 (no data fetched yet) is not reliable across engines — some
     WebKit builds silently drop that play request instead of queuing it,
     leaving the video stuck on its poster frame forever with no error in
     the console. `playWhenReady` waits for `canplay`/`loadeddata` (proof
     the browser actually has a frame to show) before calling `.play()`,
     and if that first attempt is still rejected (autoplay policy racing
     with the event, tab backgrounded, etc.) it retries once more on the
     next `canplay`/`loadeddata` tick rather than giving up silently. */
  var playWhenReady = function (video) {
    var attempt = function () {
      var playPromise = video.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(function () {
          var retry = function () {
            video.removeEventListener('canplay', retry);
            video.removeEventListener('loadeddata', retry);
            video.play().catch(function () {});
          };
          video.addEventListener('canplay', retry, { once: true });
          video.addEventListener('loadeddata', retry, { once: true });
        });
      }
    };
    if (video.readyState >= 2) {
      attempt();
      return;
    }
    var onReady = function () {
      video.removeEventListener('canplay', onReady);
      video.removeEventListener('loadeddata', onReady);
      attempt();
    };
    video.addEventListener('canplay', onReady, { once: true });
    video.addEventListener('loadeddata', onReady, { once: true });
    if (video.readyState === 0) video.load();
  };

  /* ---- Hero video: serve the matching source for the viewport -------- */
  var heroDesktop = document.querySelector('[data-hero-video="desktop"]');
  var heroMobile = document.querySelector('[data-hero-video="mobile"]');
  if (heroDesktop && heroMobile) {
    var heroMq = window.matchMedia('(min-width: 700px)');
    var applyHeroVideo = function () {
      var show = heroMq.matches ? heroDesktop : heroMobile;
      var hide = heroMq.matches ? heroMobile : heroDesktop;
      hide.pause();
      playWhenReady(show);
    };
    applyHeroVideo();
    if (heroMq.addEventListener) heroMq.addEventListener('change', applyHeroVideo);
    else if (heroMq.addListener) heroMq.addListener(applyHeroVideo);
  }

  /* ---- Below-the-fold autoplay videos: fetch + play on approach ------
     `preload="metadata"` gives the browser a head start on container/
     duration info without paying the full download cost up front; the
     rest streams in once the video is actually about to be seen, driven
     by IntersectionObserver so the fetch doesn't start on page load. */
  var deferredVideos = document.querySelectorAll('video[autoplay]:not([data-hero-video])');
  if (deferredVideos.length) {
    if ('IntersectionObserver' in window) {
      var videoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            playWhenReady(entry.target);
            videoObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: '200px 0px' });
      deferredVideos.forEach(function (video) { videoObserver.observe(video); });
    } else {
      deferredVideos.forEach(playWhenReady);
    }
  }

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
