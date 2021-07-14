---
title: 'Filterable Portfolio Popup'
weight: 7
draft: false
---
Shuffle.js plugin is being used in the project to filter the portfolio item in this template.

Follow the steps for customization

1. Create all filter menu with `label` and `input` tag. Set `name="shuffle-filter"` in all input tag and give them a `value` and same named `id`.

```html
<div class="shuffle-btn-group">
  <label class="active" for="all">
    <input type="radio" name="shuffle-filter" id="all" value="all" checked="checked">Show All
  </label>
  <label for="commercial">
    <input type="radio" name="shuffle-filter" id="commercial" value="commercial">Commercial
  </label>
  <label for="education">
    <input type="radio" name="shuffle-filter" id="education" value="education">Education
  </label>
  <label for="government">
    <input type="radio" name="shuffle-filter" id="government" value="government">Government
  </label>
  <label for="infrastructure">
    <input type="radio" name="shuffle-filter" id="infrastructure" value="infrastructure">Infrastructure
  </label>
  <label for="residential">
    <input type="radio" name="shuffle-filter" id="residential" value="residential">Residential
  </label>
  <label for="healthcare">
    <input type="radio" name="shuffle-filter" id="healthcare" value="healthcare">Healthcare
  </label>
</div><!-- project filter end -->
```

2. Add shuffle-filter's value as `data-groups` in your items.

```html
<div class="row shuffle-wrapper">
  <div class="col-1 shuffle-sizer"></div>

  <div class="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;government&quot;,&quot;healthcare&quot;]">
    <div class="project-img-container">

    </div>
  </div><!-- shuffle item 1 end -->

  <div class="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;healthcare&quot;]">
    <div class="project-img-container">
    
    </div>
  </div><!-- shuffle item 2 end -->

  <div class="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
    <div class="project-img-container">
    
    </div>
  </div><!-- shuffle item 3 end -->

  <div class="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;education&quot;,&quot;infrastructure&quot;]">
    <div class="project-img-container">
    
    </div>
  </div><!-- shuffle item 4 end -->

  <div class="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;education&quot;]">
    <div class="project-img-container">
    
    </div>
  </div><!-- shuffle item 5 end -->

  <div class="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;residential&quot;]">
    <div class="project-img-container">
    
    </div>
  </div><!-- shuffle item 6 end -->
</div><!-- shuffle end -->
```

3. For gallery popup create an `anchor/a` tag and set classname as `gallery-popup`. set the `href` value of your popup image location.

```html
<div class="project-img-container">
  <a class="gallery-popup" href="images/projects/project1.jpg" aria-label="project-img">
    <img class="img-fluid" src="images/projects/project1.jpg" alt="project-img">
    <span class="gallery-icon"><i class="fa fa-plus"></i></span>
  </a>
  <div class="project-item-info">
    ****
  </div>
</div>
```