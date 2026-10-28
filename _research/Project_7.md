---
title: "Two Stage Probabilistic Learning with Uncertainty Propagation"
permalink: /research/project_7/
excerpt: "A two stage probabilistic framework that reconstructs physically meaningful variables missing or uncertain during monitoring and propagates their uncertainty to the final prediction, producing reliable and well calibrated predictive intervals.<br/><center><img alt='Two Stage Framework' class='align-center' src='/images/projects/Two_Stage_GP_1.png' style='width: 700px; padding: 10px; margin: 10px 20px' /></center>"
collection: research
---

<div style="text-align: justify;">
Many monitoring and prediction problems in engineering depend on physically meaningful variables that are unavailable, only partially observed, or affected by uncertainty during routine operation. These variables often describe the conditions that govern the system response, so reconstructing them from the available measurements can improve both the accuracy and the interpretability of predictions. However, treating reconstructed values as exact inputs neglects the uncertainty introduced during their estimation and leads to overly narrow predictive intervals and overconfident predictions.

This study presents a general two stage probabilistic framework that both reconstructs an intermediate variable and propagates its uncertainty to the final prediction. In the first stage, an upstream model estimates the predictive distribution of the intermediate variable. In the second stage, a downstream model predicts the quantity of interest using both the measured inputs and the reconstructed variable. Sampling based propagation carries the upstream distribution through the second stage, so the final prediction accounts for uncertainty arising from both reconstruction and prediction. Scalable probabilistic models are used in both stages to handle large monitoring datasets and capture input dependent uncertainty.

The framework is demonstrated on an offshore wind turbine structural health monitoring case study, where turbulence related wind information serves as the intermediate variable linking operational and structural response measurements to fatigue damage. The reconstructed variable captures wake induced turbulence patterns and slightly improves damage prediction relative to a direct single stage model, while uncertainty propagation substantially improves the calibration of predictive intervals.

These findings support more reliable risk assessment and maintenance decisions by providing predictions whose uncertainty reflects every step of the modeling process.
</div>

{% include project-papers.html %}

<center>
  <img alt="Two Stage Framework" class="align-center"
       src="/images/projects/Two_Stage_GP_2.png"
       style="width: 700px; padding: 10px; margin: 10px 20px" />
</center>
