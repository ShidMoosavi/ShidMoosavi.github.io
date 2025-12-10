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
  <!-- <div class="gallery-title">2025</div> -->
  <div class="gallery-images">
    {% for i in (1..15) %}
      <img src="/images/Gallery/NU/{{ i }}.jpg" alt="Northeastern University {{ i }}">
    {% endfor %}
  </div>
</div>

## University of Central Florida

<div class="gallery-section">
  <!-- <div class="gallery-title">2024</div> -->
  <div class="gallery-images">
    {% for i in (1..18) %}
      <img src="/images/Gallery/UCF/{{ 19 - i }}.jpg" alt="University of Central Florida {{ 19 - i }}">
    {% endfor %}
  </div>
</div>
