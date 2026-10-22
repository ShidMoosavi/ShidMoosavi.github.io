---
title: "Wind Power Forecasting Across North American Power Grids"
permalink: /research/project_6/
excerpt: "A forecasting framework that combines weather models with data driven and physics based approaches to predict wind power generation for grid operators across North America, from the regional level down to individual wind farms.<br/><center><img alt='Wind Power Forecasting' class='align-center' src='/images/projects/NA_Wind_Forecasting.png' style='width: 700px; padding: 10px; margin: 10px 20px' /></center>"
collection: research
# Extra boxes shown under the text, next to any paper buttons (see README).
boxes:
  - text: "Industry Internship Project"
    link: ""
    color: gray
---

<div style="text-align: justify;">
As wind energy becomes a larger share of the electricity supply, accurate forecasts of wind power generation are essential for grid operators, energy traders, and market participants. Wind generation is highly variable and depends on weather conditions that change across regions and time scales, making reliable forecasting a key challenge for grid stability and market planning.

This project develops a forecasting framework for Regional Transmission Organizations and Independent System Operators across North America. Wind farms are mapped to their grid regions and subregions, and site specific weather information at each farm location is used as model input. Historical generation data are carefully cleaned and aligned with farm level information to build a consistent foundation for modeling.

The framework combines multiple weather sources, including reanalysis data and global numerical weather prediction models, with both data driven and physics based approaches. Machine learning models learn the relationship between wind conditions and power output, while turbine power curves provide a physically grounded representation of generation at each farm. Together, these approaches produce power forecasts across a range of forecast horizons.

Forecasts are generated at the regional and subregional levels and then disaggregated to individual wind farms, providing a consistent view of expected generation from the grid scale down to the farm scale. This multi level structure supports operational planning, market decisions, and a better understanding of how wind resources contribute to the evolving North American power system.
</div>

{% include project-papers.html %}

<center>
  <img alt="Wind Power Forecasting" class="align-center"
       src="/images/projects/NA_Wind_Forecasting.png"
       style="width: 700px; padding: 10px; margin: 10px 20px" />
</center>
