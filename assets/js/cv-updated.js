/*
  "Last updated" date of the CV, filled in automatically.

  Every element written by _includes/cv-updated.html names a file in this
  repository (data-cv-file) and starts hidden. This script asks GitHub when
  that file was last committed (i.e. when you last uploaded the PDF), writes
  the month and year into it ("November 2026") and shows it. If GitHub cannot
  be reached, the text simply stays hidden.

  GitHub is asked on every page load, so a new upload shows up right away.
  The last answer is also saved in the browser: it is shown instantly while
  GitHub is asked, and used if GitHub cannot be reached (GitHub allows 60
  calls per hour per visitor).
*/
(function () {
  var elements = document.querySelectorAll('[data-cv-file]');
  if (!elements.length || !window.fetch) return;

  function show(path, isoDate) {
    var text = new Date(isoDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    Array.prototype.forEach.call(elements, function (el) {
      if (el.getAttribute('data-cv-file') !== path) return;
      var slot = el.querySelector('[data-cv-date]');
      if (slot) slot.textContent = text;
      el.hidden = false;
    });
  }

  var requested = {};
  Array.prototype.forEach.call(elements, function (el) {
    var path = el.getAttribute('data-cv-file');
    var repo = el.getAttribute('data-repo');
    if (!path || !repo || requested[path]) return;
    requested[path] = true;

    var key = 'cv-updated:' + repo + ':' + path;
    try {
      var cached = JSON.parse(localStorage.getItem(key) || 'null');
      if (cached && cached.date) show(path, cached.date);
    } catch (e) {}

    fetch('https://api.github.com/repos/' + repo + '/commits?per_page=1&path=' + encodeURIComponent(path))
      .then(function (response) { return response.ok ? response.json() : null; })
      .then(function (commits) {
        if (!commits || !commits.length) return;
        var date = commits[0].commit.committer.date;
        show(path, date);
        try { localStorage.setItem(key, JSON.stringify({ date: date, saved: Date.now() })); } catch (e) {}
      })
      .catch(function () {});
  });
})();
