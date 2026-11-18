---
title: "RL-Based Tuning for Semi-Supervised Damage Detection"
permalink: /research/project_8/
excerpt: "A reinforcement learning agent that adaptively tunes the parameters of a feature based, semi-supervised, open set damage detection framework in real time, keeping structural health monitoring robust and interpretable under changing operating conditions.<br/><center><img alt='RL Based Tuning for Damage Detection' class='align-center' src='/images/projects/RL_damage_detection.png' style='width: 700px; padding: 10px; margin: 10px 20px' /></center>"
collection: research
---

<div style="text-align: justify;">
Civil infrastructure such as wind turbines, bridges, and buildings operates under constantly changing environmental and operational conditions, which makes vibration based damage detection challenging. Most detection pipelines depend on a few manually tuned parameters, and settings chosen offline for one structure or condition often fail to transfer, leading to false alarms, missed detections, or spurious classes.

The underlying detector is a semi-supervised, open set framework that extracts damage sensitive features from acceleration signals, projects them with Linear Discriminant Analysis, and scores new observations with Probabilistic Linear Discriminant Analysis. Extreme value thresholds allow the model to assign data to known classes or create new classes when unseen conditions such as damage appear. A sensitivity analysis showed that performance depends strongly on these parameters and their interactions, so they cannot be tuned one at a time.

This study casts parameter tuning as a sequential decision problem and introduces a reinforcement learning agent that adjusts key parameters in real time based on indicators of classifier behavior, replacing one shot offline calibration with a continuous closed loop process.

The framework is demonstrated on a wind turbine case study, trained only on healthy data and tested on unseen healthy and damaged conditions. It reliably distinguishes damaged from undamaged states and identifies distinct health conditions without manual parameter selection.
</div>

{% include project-papers.html %}

<!-- Graphical abstract placeholder: replace with the final figure when available -->
<center>
  <img alt="RL Based Tuning for Damage Detection" class="align-center"
       src="/images/projects/RL_damage_detection.png"
       style="width: 900px; padding: 10px; margin: 10px 20px" />
</center>
