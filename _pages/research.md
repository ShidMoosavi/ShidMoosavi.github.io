---
layout: archive
title: "Projects"
permalink: /research/
author_profile: true
---

<hr>  

{% include base_path %}
                                                                  
{% for post in site.research reversed %}
  {% include archive-single.html %}
{% endfor %}
