/* KD Design System — docs interactions */
(function () {
  // theme toggle (shares the portfolio's storage key)
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('kd-theme', next); } catch (e) {}
    });
  }

  // reveal on scroll
  var reveals = document.querySelectorAll('.kd-reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // copy swatches
  var toast = document.getElementById('toast');
  var toastTimer;
  document.querySelectorAll('.swatch[data-copy]').forEach(function (sw) {
    sw.addEventListener('click', function () {
      var v = sw.getAttribute('data-copy');
      function done() {
        if (!toast) return;
        toast.textContent = 'Copied ' + v;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 1600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(v).then(done, done);
      } else { done(); }
    });
  });

  // motion demos
  var lane = document.getElementById('lane1');
  var rise = document.getElementById('riseDemo');
  var replay = document.getElementById('replayMotion');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function playMotion() {
    if (reduced) return;
    if (lane) {
      lane.classList.remove('play');
      void lane.offsetWidth;
      lane.classList.add('play');
    }
    if (rise) {
      rise.style.animation = 'none';
      void rise.offsetWidth;
      rise.style.animation = 'kd-rise 0.9s var(--kd-ease) both';
    }
  }
  if (replay) replay.addEventListener('click', playMotion);
  if (lane && 'IntersectionObserver' in window && !reduced) {
    var mo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { playMotion(); mo.disconnect(); } });
    }, { threshold: 0.4 });
    mo.observe(lane);
  }

  // year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
