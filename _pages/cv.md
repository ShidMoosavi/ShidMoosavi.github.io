---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
last_updated: "August 2026"
# To update your CV: upload the new PDF to files/CV/ with the same name (or change the path below)
cv_file: "/files/CV/CV_ShidMoosavi.pdf"
---

{% include base_path %}
{% assign cv_url = page.cv_file | prepend: base_path %}

<p>
    A PDF copy of my CV, <strong>last updated {{ page.last_updated }}</strong>, is available below:
</p>

<div class="cv-actions">
    <a class="btn-brand" href="{{ cv_url }}" target="_blank" rel="noopener"><i class="fas fa-file-pdf" aria-hidden="true"></i> View CV</a>
    <a class="btn-brand" href="{{ cv_url }}" download><i class="fas fa-download" aria-hidden="true"></i> Download</a>
</div>

<!-- Desktop: Embedded PDF -->
<div class="cv-desktop">
    <iframe class="cv-frame" src="{{ cv_url }}" title="Curriculum Vitae">
        Your browser does not support PDFs.
        Please <a href="{{ cv_url }}">download the PDF here</a>.
    </iframe>
</div>

<!-- Mobile: the buttons above open the PDF -->
<div class="cv-mobile">
    <p>If the CV does not open, <a href="{{ cv_url }}" download>click here to download</a>.</p>
</div>
