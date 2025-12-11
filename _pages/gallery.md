---
layout: archive
title: "Gallery"
permalink: /gallery/
---

Explore images and visuals from my journey.

<style>
  .gallery-section {
    margin-bottom: 40px;
  }
  .gallery-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .gallery-images {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  .gallery-images img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid #ddd;
    transition: transform 0.3s;
  }
  .gallery-images img:hover {
    transform: scale(1.05);
    border-color: #007bff;
  }
</style>

---

## Northeastern University

<div class="gallery-section">
  <div class="gallery-images">
    {% for i in (1..6) %}
      {% assign n = 7 | minus: i %}
      <img src="/images/NU/{{ n }}.jpg" alt="Northeastern University {{ n }}">
    {% endfor %}
  </div>
</div>


## University of Central Florida

<div class="gallery-section">
  <div class="gallery-images">
    {% for i in (1..12) %}
      {% assign n = 13 | minus: i %}
      <img src="/images/UCF/{{ n }}.jpg" alt="University of Central Florida {{ n }}">
    {% endfor %}
  </div>
</div>

