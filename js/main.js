/* naes — site
   1) escala o palco 1920×1080 de cada seção para a tela
   2) marca o ponto ativo da navegação lateral */
(function () {
  'use strict';

  var root = document.documentElement;
  var sections = Array.prototype.slice.call(document.querySelectorAll('.section'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('#dots a'));

  // Cor de fundo de cada seção (aparece só se sobrar espaço, ex.: celular em pé)
  sections.forEach(function (s) { if (s.dataset.bg) s.style.backgroundColor = s.dataset.bg; });

  /* ---------- 1) Escala ---------- */
  function fit() {
    var w = window.innerWidth, h = window.innerHeight;
    var cover = Math.max(w / 1920, h / 1080);   // preenche a tela (corta o excesso)
    var contain = Math.min(w / 1920, h / 1080); // mostra tudo (sobra faixa)
    // Em telas em pé, mostrar a arte inteira é melhor que cortar no meio
    var portrait = (w / h < 1);
    root.classList.toggle('is-contain', portrait);
    root.style.setProperty('--s', portrait ? contain : cover);
  }
  fit();
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);

  /* ---------- 2) Ponto ativo ---------- */
  function setActive(i) {
    dots.forEach(function (d, k) {
      if (k === i) d.setAttribute('aria-current', 'true');
      else d.removeAttribute('aria-current');
    });
  }
  setActive(0);

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setActive(sections.indexOf(e.target));
      });
    }, { threshold: 0.55 });
    sections.forEach(function (s) { io.observe(s); });
  }
})();
