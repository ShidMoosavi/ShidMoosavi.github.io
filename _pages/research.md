---
layout: archive
title: "Research Projects"
permalink: /research/
---

<hr>  

{% include base_path %}
                                                                  
<div class="research-grid">
{% for post in site.research reversed %}
  {% include archive-single.html %}
{% endfor %}
</div>
