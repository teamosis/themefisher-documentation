---
title: 'Pricing'
weight: 10
draft: false
---
1. Customize the Pricing Plan content . Here is the Pricing Plan items html block. Add or Remove `ts-pricing-featured` class in `ts-pricing-box` element to make a featured or non-featured plan.

```html
<div class="ts-pricing-box ts-pricing-featured">
  <div class="ts-pricing-header">
    <h2 class="ts-pricing-name">Home Construction</h2>
    <h2 class="ts-pricing-price">
      <span class="currency">$</span><strong>279.9</strong><small>/Month</small>
    </h2>
  </div><!-- Pricing header -->
  <div class="ts-pricing-features">
    <ul class="list-unstyled">
      <li>Project Management for Owners</li>
      <li>Pre-construction feasibility</li>
      <li>On-site representation</li>
      <li>Quality control inspections</li>
      <li>Schedule claim preparation/defense</li>
      <li>Project phasing development</li>
    </ul>
  </div><!-- Features end -->
  <div class="plan-action">
    <a href="#" class="btn btn-dark">Order Now</a>
  </div>
</div><!-- Plan 1 end -->
```