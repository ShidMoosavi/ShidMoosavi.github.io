---
title: "RL-Based Tuning for Semi-Supervised Damage Detection"
permalink: /research/project_8/
excerpt: "A reinforcement learning agent that adaptively tunes the parameters of a feature based, semi supervised, open set damage detection framework in real time, keeping structural health monitoring robust and interpretable under changing operating conditions.<br/><center><img alt='RL Based Tuning for Damage Detection' class='align-center' src='/images/projects/RL_damage_detection.png' style='width: 700px; padding: 10px; margin: 10px 20px' /></center>"
collection: research
---

<div style="text-align: justify;">
Civil infrastructure such as wind turbines, bridges, and buildings operates under constantly changing environmental and operational conditions, which makes vibration based structural health monitoring challenging. Factors such as wind, temperature, loading, and control actions can shift the dynamic response on short time scales, so damage sensitive features that separate healthy and damaged states well under one condition can lose that separability under another. Most damage detection pipelines depend on a handful of manually tuned parameters, and configurations chosen offline for one structure, season, or site often fail to transfer, leading to false alarms, missed detections, or spurious classes.

The underlying detector is a semi supervised, open set framework. Compact damage sensitive features are extracted from windowed acceleration signals, Linear Discriminant Analysis projects them into a low dimensional space, and Probabilistic Linear Discriminant Analysis scores each new observation against known classes. Thresholds fitted with a Generalized Extreme Value distribution allow the model to assign data to existing classes, update them over time, or create new classes when previously unseen conditions such as damage appear. A factorial sensitivity analysis over thousands of parameter combinations showed that performance depends strongly on these parameters and, importantly, on the interactions among them, so they cannot be tuned one at a time.

This study casts parameter tuning as a sequential decision problem and introduces a reinforcement learning agent that tunes the detector in real time. The agent does not alter the classifier itself; it observes compact indicators of classifier behavior, such as how close the incoming data are to the class thresholds and how many observations are waiting to form new classes or update existing ones, and makes small, rate limited adjustments to key parameters including the new class and update counters and the decision threshold. Its reward balances classification confidence, successful detection of new conditions, and penalties for congestion and ambiguity, replacing one shot offline calibration with a continuous closed loop process.

The framework is demonstrated on a wind turbine case study using experimental monitoring data, trained only on healthy data from different operating regions and tested on unseen healthy data together with pitch drive failure and aerodynamic imbalance scenarios. The reinforcement learning tuned framework maintains high binary and multi class performance throughout the sequence, reliably distinguishing damaged from undamaged conditions and identifying distinct health states while removing the need for manual parameter selection.
</div>

{% include project-papers.html %}

<!-- Graphical abstract placeholder: replace with the final figure when available -->
<center>
  <img alt="RL Based Tuning for Damage Detection" class="align-center"
       src="/images/projects/RL_damage_detection.png"
       style="width: 700px; padding: 10px; margin: 10px 20px" />
</center>
