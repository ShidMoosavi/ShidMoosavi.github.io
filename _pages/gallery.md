---
layout: archive
title: "Gallery"
permalink: /gallery/
---

{% include base_path %}

Explore images and visuals from my journey.

{% comment %}
  Sections and folders are listed in _data/gallery.yml - edit that file, not this one.
  Style lives in _sass/_custom.scss (section 12). Photo viewer: assets/js/gallery.js.
  Each section first shows 2 rows of photos (as many as fit the screen width) and a
  "Show all" button. To change the number of rows, edit ROWS at the top of assets/js/gallery.js.

  FAST LOADING
  The uploaded photos are large. The page does not load them directly: it asks the free
  image service wsrv.nl for a small copy (thumbnail) and a medium copy (full-screen view).
  Your uploaded files are never changed. If wsrv.nl fails, the original photo is shown.
  - resize           : set to false to always load the original photos
  - thumb_width      : width in pixels of the small photos in the grid
  - full_width       : width in pixels of the photo in the full-screen view
  - photo_version    : if you REPLACE a photo with a new one under the same name and the old
                       one still shows, increase this number by 1 (clears the saved copies)
{% endcomment %}
{% assign resize = true %}
{% assign thumb_width = 640 %}
{% assign full_width = 1920 %}
{% assign photo_version = 1 %}

{% assign site_root = site.url | append: site.baseurl %}
<div class="gallery">
{% for section in site.data.gallery %}
{% assign folder_path = '/images/' | append: section.folder | append: '/' %}
{% assign photos = site.static_files | where_exp: "f", "f.path contains folder_path" | where: "extname", ".jpg" %}
<details class="gallery-section" open>
  <summary class="gallery-section__head">
    <h2>{{ section.title }}</h2>
    <span class="gallery-section__count">{{ photos.size }} photos</span>
    <span class="gallery-section__toggle" aria-hidden="true"></span>
  </summary>
  {% if section.description %}<p class="gallery-description">{{ section.description }}</p>{% endif %}
  <div class="gallery-images">
    {% for i in (1..photos.size) %}
      {% assign n = photos.size | plus: 1 | minus: i %}
      {% assign original = base_path | append: folder_path | append: n | append: '.jpg' %}
      {% if resize %}
        {% assign source = site_root | append: folder_path | append: n | append: '.jpg' | url_encode %}
        {% capture thumb %}https://wsrv.nl/?url={{ source }}&amp;w={{ thumb_width }}&amp;q=72&amp;output=webp&amp;v={{ photo_version }}{% endcapture %}
        {% capture full %}https://wsrv.nl/?url={{ source }}&amp;w={{ full_width }}&amp;q=82&amp;output=webp&amp;we&amp;v={{ photo_version }}{% endcapture %}
      {% else %}
        {% assign thumb = original %}
        {% assign full = original %}
      {% endif %}
      <img src="{{ thumb }}" data-full="{{ full }}" data-original="{{ original }}" alt="{{ section.title }} {{ n }}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=this.dataset.original;this.dataset.full=this.dataset.original;">
    {% endfor %}
  </div>
  <button class="gallery-more" type="button" aria-expanded="false" data-count="{{ photos.size }}" hidden>Show all {{ photos.size }} photos</button>
</details>
{% endfor %}
</div>

<div class="lightbox" id="lightbox" aria-hidden="true">
  <button class="lightbox__btn lightbox__btn--close" aria-label="Close">&times;</button>
  <button class="lightbox__btn lightbox__btn--prev" aria-label="Previous photo">&#8249;</button>
  <img src="" alt="">
  <button class="lightbox__btn lightbox__btn--next" aria-label="Next photo">&#8250;</button>
</div>

<script src="{{ base_path }}/assets/js/gallery.js"></script>
