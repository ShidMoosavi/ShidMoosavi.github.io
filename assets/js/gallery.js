/* Full-screen photo viewer for the Gallery page (click a photo; arrows / Esc on keyboard).
   Shows the medium-size copy (data-full); falls back to the original photo if it fails to load.
   Arrows only move through photos in sections that are open. */
(function () {
  var box = document.getElementById('lightbox');
  if (!box) return;

  var big = box.querySelector('img');
  var photos = [];
  var current = 0;

  function openPhotos() {
    return Array.prototype.slice.call(document.querySelectorAll('.gallery-section[open] .gallery-images img'));
  }

  function show(index) {
    current = (index + photos.length) % photos.length;
    var photo = photos[current];
    big.onerror = function () {
      big.onerror = null;
      big.src = photo.getAttribute('data-original');
    };
    big.src = photo.getAttribute('data-full') || photo.src;
    big.alt = photo.alt;
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
  }

  function close() {
    box.classList.remove('is-open');
    box.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('.gallery-images img').forEach(function (img) {
    img.addEventListener('click', function () {
      photos = openPhotos();
      show(photos.indexOf(img));
    });
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
