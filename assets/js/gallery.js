/* Full-screen photo viewer for the Gallery page (click a photo; arrows / Esc on keyboard). */
(function () {
  var box = document.getElementById('lightbox');
  if (!box) return;

  var big = box.querySelector('img');
  var photos = Array.prototype.slice.call(document.querySelectorAll('.gallery-images img'));
  var current = 0;

  function show(index) {
    current = (index + photos.length) % photos.length;
    big.src = photos[current].src;
    big.alt = photos[current].alt;
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
  }

  function close() {
    box.classList.remove('is-open');
    box.setAttribute('aria-hidden', 'true');
  }

  photos.forEach(function (img, i) {
    img.addEventListener('click', function () { show(i); });
  });

  box.querySelector('.lightbox__btn--prev').addEventListener('click', function (e) { e.stopPropagation(); show(current - 1); });
  box.querySelector('.lightbox__btn--next').addEventListener('click', function (e) { e.stopPropagation(); show(current + 1); });
  big.addEventListener('click', function (e) { e.stopPropagation(); show(current + 1); });
  box.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();
