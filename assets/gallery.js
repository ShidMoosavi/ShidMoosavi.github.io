/* Gallery page scripts.
   1. "Show all" button: each section first shows ROWS rows of photos (as many per row as
      fit the screen) and a button to show the rest.
   2. Full-screen photo viewer (click a photo; arrows / Esc on keyboard).
      Shows the medium-size copy (data-full); falls back to the original photo if it fails.
      Arrows move through all photos of the sections that are open. */

/* 1. Show only the first rows of each section */
(function () {
  var ROWS = 2;

  document.querySelectorAll('.gallery-section').forEach(function (section) {
    var grid = section.querySelector('.gallery-images');
    var button = section.querySelector('.gallery-more');
    if (!grid || !button) return;

    var photos = grid.querySelectorAll('img');
    var count = button.getAttribute('data-count');
    var expanded = false;

    function update() {
      if (!section.open) return;
      var columns = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
      var limit = expanded ? photos.length : columns * ROWS;
      photos.forEach(function (img, i) { img.classList.toggle('is-hidden', i >= limit); });
      button.hidden = photos.length <= columns * ROWS;
      button.textContent = expanded ? 'Show less' : 'Show all ' + count + ' photos';
      button.setAttribute('aria-expanded', String(expanded));
    }

    button.addEventListener('click', function () {
      expanded = !expanded;
      update();
      if (!expanded) {
        var top = section.getBoundingClientRect().top;
        if (top < 0) section.scrollIntoView({ behavior: 'smooth' });
      }
    });

    section.addEventListener('toggle', update);
    window.addEventListener('resize', update);
    update();
  });
})();

/* 2. Full-screen photo viewer */
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
