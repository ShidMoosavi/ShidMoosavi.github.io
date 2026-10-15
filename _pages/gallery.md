---
layout: archive
title: "Gallery"
permalink: /gallery/
---

{% include base_path %}

Explore images and visuals from my journey.

{% comment %}
  Sections and folders are listed in _data/gallery.yml - edit that file, not this one.
  Style lives in _sass/_custom.scss (section 12).
{% endcomment %}

{% for section in site.data.gallery %}
{% assign folder_path = '/images/' | append: section.folder | append: '/' %}
{% assign photos = site.static_files | where_exp: "f", "f.path contains folder_path" | where: "extname", ".jpg" %}
<h2>{{ section.title }}</h2>
{% if section.description %}<p class="gallery-description">{{ section.description }}</p>{% endif %}
<div class="gallery-section">
  <div class="gallery-images">
    {% for i in (1..photos.size) %}
      {% assign n = photos.size | plus: 1 | minus: i %}
      <img src="{{ base_path }}{{ folder_path }}{{ n }}.jpg" alt="{{ section.title }} {{ n }}" loading="lazy">
    {% endfor %}
  </div>
</div>
{% endfor %}

<div class="lightbox" id="lightbox" aria-hidden="true">
  <button class="lightbox__btn lightbox__btn--close" aria-label="Close">&times;</button>
  <button class="lightbox__btn lightbox__btn--prev" aria-label="Previous photo">&#8249;</button>
  <img src="" alt="">
  <button class="lightbox__btn lightbox__btn--next" aria-label="Next photo">&#8250;</button>
</div>

<script src="{{ base_path }}/assets/js/gallery.js"></script>
